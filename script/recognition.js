

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognitionButton = document.querySelector('.recognition_icon')

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'

recognitionButton.addEventListener('click', () => {
    recognition.start()
    console.log('iniciou')
    recognition.onresult = e => {
        console.log(e.results[0][0])
    }
    // search.innerHTML = 
})
