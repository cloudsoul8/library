let myLibrary = []
const libraryView = document.querySelector("#library")
let cardNum = 0

class Book {
   constructor(title, author, pages, isRead) {
      this.id = cardNum
      this.title = title
      this.author = author
      this.pages = pages
      this.isRead = isRead
   }
}

function addBookToLibrary(book) {
   // to array
   myLibrary.push(book)

   // to html
   const bookCard = document.createElement("div")
   bookCard.setAttribute("id", `card-${cardNum}`)
   bookCard.innerText = `${book.title} ${book.author} ${book.pages} ${book.isRead}`

   // create delete button
   const deleteBtn = document.createElement("button")
   deleteBtn.setAttribute("id", `delete-${cardNum}`)
   deleteBtn.addEventListener("click", event => {
      myLibrary = myLibrary.filter( (b) =>{
         return b.id !== book.id
      })
      console.log(myLibrary)
      bookCard.remove()
   })
   bookCard.appendChild(deleteBtn)

   // add to library container
   libraryView.appendChild(bookCard)

   cardNum++
}

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (event) => {
   let title = document.getElementById("title-bar").value
   let author = document.getElementById("author-bar").value
   let pages = document.getElementById("pages-bar").value
   let isRead = document.getElementById("is-read-bar").checked

   addBookToLibrary(new Book(title, author, pages, isRead))
   event.preventDefault()
})
