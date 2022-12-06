

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognitionButton = document.querySelector('.recognition_icon')

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'

recognitionButton.addEventListener('click', () => {
    recognition.start()
    recognition.onresult = e => {
        const value = e.results[0][0].transcript
        addHistoryList(value, generateId())
        // location.href = searchUrl.concat(value.split(' ').join('+'))
    }
})
