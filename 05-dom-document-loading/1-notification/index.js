export default class NotificationMessage {
  static active;
  element;
  timerId;

  constructor(message, {
    duration = 2000,
    type = 'success',
  } = {}) {
    this.message = message;
    this.showTime = (duration / 1000) + 's';
    this.type = type;
    this.duration = duration;

    this.render();
  }

  get template() {
    return ` <div class="notification ${this.type}" style="--value:${this.showTime}">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.message}
      </div>
    </div>
  </div>`;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show(parent = document.body) {
    if (NotificationMessage.active) {
      NotificationMessage.active.remove()
    }

    parent.append(this.element);

    this.timerId = setTimeout(() => {
      this.remove();
    }, this.duration);

    NotificationMessage.active = this;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    clearTimeout(this.timerId);
    NotificationMessage.active = null;
  }
}
