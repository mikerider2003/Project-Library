const myLibrary = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: 'not read yet'},
    {title: 'A Song of Ice and Fire', author: 'George R. R. Martin', pages: 4224, read: 'not read yet'}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newbook = document.querySelectorAll("button.newBook");
    const overlay = document.querySelector("div.overlay");
    const modal = document.querySelector("div.modal")

    newbook.forEach(element => {
        element.addEventListener("click", () => {
            modal.classList.add("active");
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });

    document.addEventListener("keydown", element => {
        if(element.code === "Escape"){
            modal.classList.remove("active");
            overlay.classList.remove("active");
        };
    });

    // Submit button
    const submit = document.getElementById('submit')
    
    submit.addEventListener("click", (event) =>{
        event.preventDefault()
        
        const title = document.getElementById("title")
        const author = document.getElementById("author")
        const pages = document.getElementById("pages")
        const checkbox = document.getElementById("check-box")

        if(checkbox.checked == true){
            var isRead = "read"
        } else {
            var isRead = "not read yet"
        }
        
        myLibrary.push(new Book(title.value, author.value, pages.value, isRead))

        title.value = ""
        author.value = ""
        pages.value = ""
        checkbox.checked = false

        modal.classList.remove("active");
        overlay.classList.remove("active");

        reset();
        display();
    })
};

function reset(){
    const main = document.querySelector("main");
    const reset = main.querySelectorAll("div.card");
    
    reset.forEach(element=>element.remove())
};

function display(){
    const main = document.querySelector("main")

    myLibrary.forEach((element, index) => {

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
        content[0].appendChild(h1Data);


        // h2
        const h2Author = document.createElement('h2');
        const h2AuthorData = document.createElement('h2');
        const h2Pages = document.createElement('h2');
        const h2PagesData = document.createElement('h2');

        h2Author.textContent = "Author:";
        h2AuthorData.textContent = element.author;
        h2Pages.textContent = "Pages:";
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
        
        // Bind button for changing the read status
        read.addEventListener("click", ()=>{
            if(element.read == "read"){
                element.read = "not read yet"
            } else {
                element.read = "read"
            }
            reset()
            display()
        })

        // Change button color
        if(element.read == "read"){
            read.classList.add("green")
        } else {
            read.classList.add("red")
        }

        status.appendChild(read);
        

        // Create remove button
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "remove";

        remove.addEventListener("click", ()=>{
            myLibrary.splice(index, 1)
            
            reset()
            display()
        })

        status.appendChild(remove);
    });
    return 1;
};

// console.log(new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet"))

reset();
display();
addBookToLibrary();