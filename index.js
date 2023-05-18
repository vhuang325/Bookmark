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

    updateBookMarkList();

    linkInput.value = '';
    nameInput.value = '';
}
