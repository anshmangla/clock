class Clock {
  constructor() {
    this.time = '';
    this.date = '';
  }

  currentTime() {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    const session = hh >= 12 ? 'PM' : 'AM';

    this.time = this.formatTime(hh, mm, ss, session);
  }

  currentDate() {
    const date = new Date();
    const dd = date.getDate();
    const month = date.getMonth() + 1;
    const yy = date.getFullYear();

    this.date = this.formatDate(dd, month, yy);
  }

  formatTime(hh, mm, ss, session) {
    hh = hh > 12 ? hh-12 : hh;
    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    return hh + ':' + mm + ':' + ss + ' ' + session;
  }

  formatDate(dd, month, yy) {
    dd = (dd < 10) ? '0' + dd : dd;
    month = (month < 10) ? '0' + month : month;

    return dd + '/' + month + '/' + yy;
  }

  update() {
    this.currentTime();
    this.currentDate();

    document.getElementById('clock').innerText = this.time;
    document.getElementById('date').innerText = this.date;

    setTimeout(this.update.bind(this), 1000);
  }
}

const clock = new Clock();
clock.update();
