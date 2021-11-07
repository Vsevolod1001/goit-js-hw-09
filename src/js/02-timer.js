import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
let specifiedDate;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] <= new Date()){
        startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');

        //   window.alert('Please choose a date in the future');
      } else {
        specifiedDate = selectedDates[0];
        startBtn.disabled = false;
    
      }
    },
  };

flatpickr(document.querySelector('#datetime-picker'), options);

startBtn.addEventListener('click', showTime);

  function showTime(event) {
    startBtn.disabled = true;
  
    const getTime = setInterval(() => {
      const startTime = new Date();
      const { days, hours, minutes, seconds } = convertMs(specifiedDate.getTime() - startTime.getTime());
      document.querySelector('.value[data-days]').textContent = days;
      document.querySelector('.value[data-hours]').textContent = addLeadingZero(hours);
      document.querySelector('.value[data-minutes]').textContent = addLeadingZero(minutes);
      document.querySelector('.value[data-seconds]').textContent = addLeadingZero(seconds);
    }, 1000);
  }
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }




