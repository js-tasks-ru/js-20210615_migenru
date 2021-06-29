export default class ColumnChart {
  element;
  subElements = {};
  chartHeight = 50;

  constructor({
    data = [],
    label = '',
    link = '',
    value = 0,
    formatHeading = data => data,
  } = {}) {

    this.data = data;
    this.label = label;
    this.link = link;
    this.value = formatHeading(value);

    this.render();
    this.update();
  }

  render() {
    const element = document.createElement('div');

    const getColumnProps = (data) => {
      const maxValue = Math.max(...data);
      const scale = this.chartHeight / maxValue;

      return data.map(item => {
        return {
          percent: (item / maxValue * 100).toFixed(0) + '%',
          value: String(Math.floor(item * scale))
        };
      });
    };

    element.innerHTML = `
    <div class="column-chart ${ (this.data.length) ? `` : `column-chart_loading` }"
    style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        Total ${this.label}
        ${ this.link ? '<a href="' + this.link + '" class="column-chart__link">View all</a>' : '' }
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">
            ${this.value}
        </div>
        <div data-element="body" class="column-chart__chart">
         ${getColumnProps(this.data).map(item =>
    `<div style="--value: ${item.value}" data-tooltip="${item.percent}">
                     </div>`).join('')
}
        </div>
      </div>
    </div>
    `;

    this.element = element.firstElementChild;
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
