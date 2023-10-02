class Clock {
    constructor() {
      this.time = '';
      this.date = '';
    }
  
    currentTime() {
      let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      let session = 'AM';
  
      let dd = date.getDate();
      let month = date.getMonth() + 1;
      let yy = date.getFullYear();
  
      dd = (dd < 10) ? '0' + dd : dd;
      month = (month < 10) ? '0' + month : month;
  
      if (hh == 0) {
        hh = 12;
      }
  
      if (hh > 12) {
        hh = hh - 12;
        session = 'PM';
      }
  
      hh = (hh < 10) ? '0' + hh : hh;
      mm = (mm < 10) ? '0' + mm : mm;
      ss = (ss < 10) ? '0' + ss : ss;
  
      this.time = hh + ':' + mm + ':' + ss + ' ' + session;
      this.date = dd + '/' + month + '/' + yy;
  
      document.getElementById('clock').innerText = this.time;
      document.getElementById('date').innerText = this.date;
  
      setTimeout(this.currentTime.bind(this), 1000);
    }
  }

const clock = new Clock();
clock.currentTime();
