// const getStartedBtn = document.getElementById('btn-get-started');
// const enterEmailInput = document.getElementById('enterEmail');
// const emailInput = document.getElementById('email');
// const validation1El = document.querySelector('.records');
// const validation2El = document.querySelector('.records2');
// const submitBtn = document.getElementById('btn-for-free');

// function validateEmail(inputEl, validationEl) {
//   if (inputEl.value === '') {
//     validationEl.classList.add('invalid');
//   } else {
//     validationEl.classList.remove('invalid');
//   }
// }

// getStartedBtn.addEventListener('click', () => {
//   validateEmail(enterEmailInput, validation1El);
// });

// submitBtn.addEventListener('click', () => {
//   validateEmail(emailInput, validation2El);
// });


const getStarted = document.getElementById('btn-get-started')
const enterEmail = document.getElementById('enterEmail')
const checked = document.querySelector('.records')

getStarted.addEventListener('click', () => {
    if (enterEmail.value === '') {
        checked.classList.add('invalid')
    } else {
        checked.classList.remove('invalid')
    }
})

const enviar = document.getElementById('btn-for-free')
const email = document.getElementById('email')
const validacao = document.querySelector('.records2')

enviar.addEventListener('click', () => {
    if(email.value === ''){
        validacao.classList.add('invalid')
    } else {
        validacao.classList.remove('invalid')
    }
})


/*const btnGetStarted = document.getElementById('btn-get-started')
const btnStartedFree = document.getElementById('btn-started-free')
const email = document.querySelectorAll('.campo')
const checked = document.querySelectorAll('.records')

function submit() {
    email.forEach((item, indice) => {
        if (item.value === '') {
            checked[indice].classList.add('invalid')
        } else if (item.value !== '') {
            checked[indice].classList.remove('invalid')
        }
    })
}

btnGetStarted.addEventListener('click', () => {
    submit()
})

btnStartedFree.addEventListener('click', () => {
    submit()
})
*/