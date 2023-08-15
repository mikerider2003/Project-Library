const myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: 'not read yet'},
    {title: 'Different book', author: 'Different author', pages: 1234, read: 'not read yet'}
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function disiplay(){
    const main = document.querySelector("main")

    console.log(main)

    myLibrary.forEach(element => {

        // Creates card
        const card = document.createElement("div");

        card.classList.add("card");
        main.appendChild(card);

        // Crete headings containers
        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            card.appendChild(div);  
        };


        const content = card.querySelectorAll("div");
        
        // Title
        const h1Label = document.createElement("h1");
        const h1Data = document.createElement("h1");

        h1Label.textContent = "Title:";
        h1Data.textContent = element.title;
        
        content[0].appendChild(h1Label);
        content[0].appendChild(h1Data)


        // h2
        const h2Author = document.createElement('h2');
        const h2AuthorData = document.createElement('h2');
        const h2Pages = document.createElement('h2');
        const h2PagesData = document.createElement('h2');

        h2Author.textContent = "Author";
        h2AuthorData.textContent = element.author;
        h2Pages.textContent = "Author";
        h2PagesData.textContent = element.pages;

        content[1].appendChild(h2Author)
        content[1].appendChild(h2AuthorData)
        content[2].appendChild(h2Pages)
        content[2].appendChild(h2PagesData)


        // Assign button container
        const status = content[3];
        status.classList.add("status")
        
        // Create read button
        const read = document.createElement("button");
        read.classList.add("read");
        read.textContent = "read";
        status.appendChild(read);
        
        // Create remove button
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "remove";
        status.appendChild(remove);

    });
    return 1;
};

disiplay();

