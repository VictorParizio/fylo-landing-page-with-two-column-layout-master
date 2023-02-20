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