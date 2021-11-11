import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', formPromises);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout (() => {
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  
}



function formPromises (e) {
  e.preventDefault();
  const {
    elements: {delay, step, amount},
  } = e.currentTarget;
   if(amount.value <= 0) {
     window.alert('Amount should be a positive number!');
     return;
   }
   if (step.value < 0 || delay.value < 0) {
     window.alert('Delay can not be a negative number!');
     return;
   }

   let formDelay = Number(delay.value);
   for (let i = 1; i <= Number(amount.value); i += 1) {
     createPromise(i, formDelay);
     formDelay += Number(step.value);
   }
}







