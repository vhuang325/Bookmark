// maintain array of OBJECTS representing all of the user's bookmarks

// re-render entire list of bookmarks anytime a book is added or removed

//use MAP  to map the boookmark array to the dom
// list of all bookmarks
const bookMarks = bookmarksArray;

// list of saved bookmarks
const savedBookMarks = [];

const formSection = document.querySelector('#formSection');
const linkInput = document.querySelector('#linkInput');
const nameInput = document.querySelector('#nameInput');
const button = document.querySelector('#button');


const addBookMark = () => {
    const link = linkInput.value;
    const name = nameInput.value;

    const newBookMark = {
        link: link,
        name: name
    };

   


    savedBookMarks.push(newBookMark);

    // updateBookMarkList();

    linkInput.value = '';
    nameInput.value = '';

    renderBookmark();
}

button.addEventListener('click', addBookMark);

const renderBookmark = () => {
    const bookMarkList = document.querySelector('.bookMarkList');
    
    const bookMarkContainer = document.createElement('section');
    bookMarkContainer.className = 'bookMarkContainer';
    bookMarkList.appendChild(bookMarkContainer);

    const bookMarkText = document.createElement('span');
    bookMarkText.className = 'bookMarkText';
    bookMarkText.innerText = savedBookMarks['name'];
    bookMarkContainer.appendChild(bookMarkText);

}


