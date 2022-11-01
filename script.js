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

Book.prototype.changeRead = function() {
   return this.isRead ? this.isRead = false : this.isRead = true  
}

function addBookToLibrary(book) {
   // to array
   myLibrary.push(book)

   // to html
   const bookCard = document.createElement("div")
   bookCard.setAttribute("id", `card-${cardNum}`)

   const title = document.createElement("p")
   const author = document.createElement("p")
   const pages = document.createElement("p")
   const isRead = document.createElement("p")

   title.setAttribute("class", "book-title")
   author.setAttribute("class", "book-author")
   pages.setAttribute("class", "book-pages")
   isRead.setAttribute("class", "book-is-read")

   title.innerHTML= book.title;
   author.innerHTML= book.author;
   pages.innerHTML= book.pages;
   isRead.innerHTML= book.isRead ? "Have Read" : "Haven't Read";

   bookCard.append(title);
   bookCard.append(author);
   bookCard.append(pages);
   bookCard.append(isRead);


   // create delete button
   const deleteBtn = document.createElement("button")
   deleteBtn.setAttribute("class", 'delete-btn')
   deleteBtn.addEventListener("click", event => {
      myLibrary = myLibrary.filter( (b) =>{
         return b.id !== book.id
      })
      // console.log(myLibrary)
      bookCard.remove()
   })
   bookCard.appendChild(deleteBtn)

   // create change read status button
   const readStatusBtn = document.createElement("button")
   readStatusBtn.setAttribute("class", 'read-status-btn')
   readStatusBtn.addEventListener("click", event => {
      book.changeRead() ? isRead.innerText = "Have Read" : isRead.innerText = "Haven't Read" 
   })
   bookCard.appendChild(readStatusBtn)

   // add to library container
   libraryView.appendChild(bookCard)

   // increment library book id
   cardNum++
}

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", (event) => {
   let title = document.getElementById("title-bar").value
   let author = document.getElementById("author-bar").value
   let pages = document.getElementById("pages-bar").value
   let isRead = document.getElementById("is-read-bar").checked

   addBookToLibrary(new Book(title, author, pages, isRead))

   const form = document.querySelector("#new-book-form")
   form.style.display = "none";
   event.preventDefault()
})


const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", () => {
   const form = document.querySelector("#new-book-form")
   form.style.display = "grid";

})