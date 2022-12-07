

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognitionButton = document.querySelector('.recognition_icon')

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'


function startRecognition() {
    textRequest.innerHTML = 'Fale Agora'
    recognitionContainer.classList.add('active')
    recognition.start()
    timeOut2sec()
    timeOut7sec()
}
function resultRecognition(e) {
    const value = e.results[0][0].transcript
    addHistoryList(value, generateId())
    location.href = searchUrl.concat(value.split(' ').join('+'))
}
function stopRecognition() {
    recognition.stop()
    recognitionContainer.classList.remove('active')
}

const textRequest = document.getElementById('request')
function timeOut2sec() {
    setTimeout(() => {
        textRequest.innerHTML = 'Ouvindo...'
    }, 2000)
}
function timeOut7sec() {
    setTimeout(() => {
        textRequest.innerHTML = 'Não entendi o que você falou'
    }, 7000)
}


const recognitionContainer = document.querySelector('.recognition_container')
recognitionButton.addEventListener('click', () => {
    startRecognition()
    recognition.onresult = e => {
        resultRecognition(e)
    }
    setTimeout(() => {
        stopRecognition()
    }, 10000)
})

const buttonRecognitionClose = document.querySelector('.recognition_close')
buttonRecognitionClose.onclick = stopRecognition
