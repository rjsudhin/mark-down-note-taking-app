// Note keeper
const addedNoteSectionContainer = document.querySelector('#added-note-section-container')

// checking the localStorage is empty or not
if (localStorage.length > 0) {
  gettingNotes()
}

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
  // getting things from localStorage
  gettingNotes()
  
}


function gettingNotes() {
  addedNoteSectionContainer.innerHTML = ''
  let checkingProps = localStorage
  for (let prop in checkingProps) {
    if (prop != 'length' && typeof checkingProps[prop] != 'function') {
      let noteCard = document.createElement('div')
      noteCard.classList.add('note-card')

      let cardTitle = document.createElement('h3')
      cardTitle.textContent = prop
      cardTitle.classList.add('note-title')

      let cardContent = document.createElement('p')
      cardContent.textContent = checkingProps[prop]
      cardContent.classList.add('note-content')

      noteCard.append(cardTitle, cardContent)
      addedNoteSectionContainer.appendChild(noteCard)
    }
  }
}