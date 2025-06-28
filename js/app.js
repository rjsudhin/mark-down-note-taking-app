// Note keeper
const addedNoteSectionContainer = document.querySelector('#added-note-section-container')
checkingNoteCount()

// checking the localStorage is empty or not
if (localStorage.length > 0) {
  gettingNotes()
} else {
  addedNoteSectionContainer.style.display = 'none'
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
    checkingNoteCount()
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
  addedNoteSectionContainer.style.display = 'flex'

  let checkingProps = localStorage
  for (let prop in checkingProps) {
    if (prop != 'length' && typeof checkingProps[prop] != 'function') {
      // card container
      let noteCard = document.createElement('div')
      noteCard.classList.add('note-card')
      // header components
      let headComponents = document.createElement('div')
      headComponents.classList.add('head-components')
      // icons
      let pinIcon = document.createElement('span')
      pinIcon.classList.add('material-symbols-outlined')
      pinIcon.textContent = 'keep'
      // title
      let cardTitle = document.createElement('h3')
      cardTitle.textContent = prop
      cardTitle.classList.add('note-title')

      headComponents.append(pinIcon, cardTitle)

      let otherComponents = document.createElement('div')
      otherComponents.classList.add('other-components')

      let cardContent = document.createElement('p')
      cardContent.textContent = checkingProps[prop]
      cardContent.classList.add('note-content')

      let deletbtn = document.createElement('span')
      deletbtn.classList.add('material-symbols-outlined')
      deletbtn.addEventListener('mousedown', removeNoteCards)
      deletbtn.textContent = 'delete'

      otherComponents.append(cardContent, deletbtn)

      noteCard.append(headComponents, otherComponents)
      checkingNoteCount()
      addedNoteSectionContainer.appendChild(noteCard)
    }
  }
}



function removeNoteCards(e) {
  let container = e.target.parentElement
  let card = container.parentElement
  let headComponents = card.firstElementChild
  let noteElement = headComponents.children
  let noteContent = noteElement[1]
  
  if (addedNoteSectionContainer.contains(card)) {
    localStorage.removeItem(noteContent.textContent)
    addedNoteSectionContainer.removeChild(card)
    checkingNoteCount()
    console.log(localStorage.length)
    if (addedNoteSectionContainer.childElementCount == 0 ) {
      addedNoteSectionContainer.style.display = 'none'
      checkingNoteCount()
    }
  }
}


function checkingNoteCount() {
  let noteSectionHeading = document.querySelector('#note-section-heading')
  if (localStorage.length >= 1) {
    console.log('My Notes')
    noteSectionHeading.textContent = 'My Notes'
  } else {
    noteSectionHeading.textContent = 'You have any notes yet'
    console.log('You have any notes yet')
  }
}