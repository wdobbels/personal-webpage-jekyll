(function(){
    const descriptionEl = document.querySelector(".book-description .description");
    const bookImage = document.getElementById("book-cover");
    const books = document.querySelectorAll(".book-stack .linkbox");

    books.forEach((book) => {
        book.onclick = (e) => {
            descriptionEl.innerHTML = e.target.dataset.description;
            bookImage.src = "/assets/img/interests/books/" + e.target.dataset.image;
        }
    });
})()