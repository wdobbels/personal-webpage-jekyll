(function(){
    const titleEl = document.querySelector(".book-description .title");
    const authorEl = document.querySelector(".book-description .author");
    const descriptionEl = document.querySelector(".book-description .description");
    const listItems = document.querySelectorAll(".reading-list li");

    function selectBook(target) {
        listItems.forEach((listItem) => {
            listItem.classList.remove("selected");
        });
        target.classList.add("selected");
        titleEl.textContent = target.dataset.title;
        authorEl.textContent = "By " + target.dataset.author;
        descriptionEl.innerHTML = target.dataset.description;
    }
    listItems.forEach((listItem) => {
        listItem.onclick = (e) => {
            selectBook(e.target);
        }
    });

    listItems[0].click();  // select first
})()