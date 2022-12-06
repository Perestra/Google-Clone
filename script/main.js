

const searchUrl = 'https://www.google.com.br/search?q='
const search = document.querySelector('.input__form')

const historyList = JSON.parse(localStorage.getItem('Busca')) || []
const History = {'SearchName': search.value}


const mode = document.querySelector('.darkmode__config')
const html = document.querySelector('html')
mode.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})


const navIcon = document.querySelector('.nav_icon')
const menuExpand = document.querySelector('.menu_expand')

const userIcon = document.querySelector('.user__content')
const userExpand = document.querySelector('.user_expand')

const configMenu = document.querySelector('.text__config')
const configExpand = document.querySelector('.config_expand')

navIcon.addEventListener('click', () => {
    userExpand.classList.remove('active')
    configExpand.classList.remove('active')
    menuExpand.classList.toggle('active')
})
userIcon.addEventListener('click', () => {
    menuExpand.classList.remove('active')
    configExpand.classList.remove('active')
    userExpand.classList.toggle('active')
})
configMenu.addEventListener('click', () => {
    menuExpand.classList.remove('active')
    userExpand.classList.remove('active')
    configExpand.classList.toggle('active')
})


const contentSection = document.querySelector('.content__section')
function searchHistoryHasLength() {
    return searchHistory.children.length >= 2
}
function handleOnFocus() {
    if(searchHistoryHasLength()) {
        contentSection.classList.add('active')
        search.onblur = handleOnBlur
    }
}
function handleOnBlur() {
    contentSection.classList.remove('active')
}
function handleKeyDown(event) {
    if(event.key === 'Enter') {
        const value = event.target.value
        createSearch(value)
        historyList.push(value)
        location.href = searchUrl.concat(value.split(' ').join('+'))
        localStorage.setItem('Busca', JSON.stringify(historyList))
        search.value = '' 
    }
}


const searchHistory = document.querySelector('.search_history')
function deleteSearch(search) {
    search.remove()
}
function createDeleteButton() {
    const button = document.createElement('button')
    button.id = 'deleteButton'
    button.setAttribute('value', 'Excluir')
    button.innerHTML = 'Excluir'

    button.addEventListener('click', function() {
        deleteSearch(this.parentElement)
    })

    return button
}
function createSearch(search) {
    const li = document.createElement('li')
    li.classList.add('search')

    const anchor = document.createElement('a')
    const clockIcon = '<i class="fa-regular fa-clock"></i>'
    anchor.setAttribute('href', searchUrl.concat(search.split(' ').join('+')))
    anchor.innerHTML = clockIcon
    
    const span = document.createElement('span')
    span.innerHTML = search
    
    anchor.appendChild(span)
    li.appendChild(anchor)
    li.appendChild(createDeleteButton())
    searchHistory.appendChild(li)

    return li
}
historyList.forEach(value => {
    createSearch(value)
})

 