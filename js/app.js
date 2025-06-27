// Note keeper

const noteTitle = document.querySelector('#title')
const noteContent = document.querySelector('#content')
const noteAddBtn = document.querySelector('.add-note-btn')


// adding new Notes
noteAddBtn.addEventListener('click', () => {
  let userNoteTitle = noteTitle.value 
  let userNoteContent = noteContent.value
  if (!userNoteTitle == '' && !userNoteContent == '') {
    localStorage.setItem(userNoteTitle, userNoteContent)
    noteTitle.value = ''
    noteContent.value = ''
    noteTitle.focus()

  } else {
    console.log('something add in input fields')
  }


  // make new notes UI
  addingNewNotes()
})


function addingNewNotes() {

}