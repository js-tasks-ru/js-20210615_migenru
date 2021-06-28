export default class ColumnChart {
  constructor(props = {}) {
    this.render(props);
    this.initEventListeners();
    this.update();
    this.chartHeight = 50;
  }

  render(props) {
    const element = document.createElement('div');
    const {label, data, value, formatHeading, link} = props;
    const newData = (data === undefined) ? [] : data;
    const chartHeight = 50;

    const getColumnProps = (data) => {
      const maxValue = Math.max(...data);
      const scale = chartHeight / maxValue;

      return data.map(item => {
        return {
          percent: (item / maxValue * 100).toFixed(0) + '%',
          value: String(Math.floor(item * scale))
        };
      });
    };

    element.innerHTML = `
    <div class="column-chart ${ (newData.length) ? `` : `column-chart_loading` }"
    style="--chart-height: ${chartHeight}">
      <div class="column-chart__title">
        Total ${label}
        ${ link ? '<a href="' + link + '" class="column-chart__link">View all</a>' : '' }
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
            ${formatHeading ? formatHeading(value) : value}
        </div>
        <div data-element="body" class="column-chart__chart">
         ${getColumnProps(newData).map(item =>
    `<div style="--value: ${item.value}" data-tooltip="${item.percent}">
                     </div>`).join('')
}
        </div>
      </div>
    </div>
    `;

    this.element = element.firstElementChild;
  }

  initEventListeners() {
  //  NOTE: добавляем события
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  update(arg) {
    arg;
  }

}
