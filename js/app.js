// открыть/закрыть модальное окно с добавлением книги 
const buttonOpen = document.querySelector('#open-btn')
const fadeBlock = document.querySelector('[data-modal]')
const bottonClose = document.querySelector('[data-modal-close]')

const fade = document.querySelector('.fade-block')

buttonOpen.addEventListener('click', () => {
    fadeBlock.classList.remove('hidden')
})

bottonClose.addEventListener('click', () => {
    fadeBlock.classList.add('hidden')
})

fade.addEventListener('click', function() {
    fadeBlock.classList.add('hidden')
})
fade.querySelector('.modal-window').addEventListener('click', function(event) {
    //console.log(event);
    event.stopPropagation()
})

//добовляем книгу на страницу

//кнопка добавить в форме
const btnAddBook = document.querySelector('.btn-add')

//форма
let form = document.querySelector('form')

//Массив с книгами
let books = {}

// вешаем собитыве на кнопку и вызываем функцию добавить книгу
btnAddBook.addEventListener('click', addBookToLib)
    

function addBookToLib() {
    // забираем значения с форму и присваиваем в переменную values
   const name = form.querySelector('[name="name"]'),
        autor = form.querySelector('[name="autor"]'),
        cover = form.querySelector('[name="cover"]'),
        text = form.querySelector('[name="desc"]')
    const values = {
        name: name.value,
        autor: autor.value,
        cover: cover.value,
        text: text.value
    }
   
    //присваиваем случайный номер книги 
    let arrayArticle = Math.round(Math.random() * 10000)

    // переносим значения полученные из формы в массив с книгамими 
    // с уникальным индификатором arrayArticle
    books[arrayArticle] = values
    
    // При нажатии на кноку удалям fade, отчищаем форму 
    fadeBlock.classList.add('hidden')
    form.reset()

    // запускаем функцию добавления книги на страницу
    drawBook(arrayArticle)
}

function drawBook(article) {
    //Создаем див с классом ....
    const div = document.createElement('div')
    div.classList.add('book-cards')

    //находи элемент в который нужно поместить  
    const booksInner = document.querySelector('.main-inner')
    booksInner.appendChild(div)

    //создаем контент книги с html разменткой и шаблонной строки
    const book = `
    <div class="book-cards__item">
        <div class="cover">
            <img src="${books[article].cover}" alt="">
        </div>
        <h3 class="book-title">${books[article].name}</h3>

        <p class="book-autor">${books[article].autor}</p>
         
        <p class="disc">${books[article].text}</p>
    </div>
    `
    // Добовляем книгу в нужный див
    div.innerHTML = book
}


