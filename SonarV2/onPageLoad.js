//change style that can not via css
setTimeout(() => {
  const root = document.querySelector(':root');
  const html = document.querySelector('html');
  root.style.setProperty('font-size', '14px')
  root.style.setProperty('--text--size--small', '0.85rem')
  root.style.setProperty('--text--size--h6', '0.85rem')
  root.style.setProperty('--ui--small--padding', '0.3rem')
  root.style.setProperty('--ui--basePadding', '0.4rem')
  root.style.setProperty('--ui--big--padding', '0.6rem')
  root.style.setProperty('--ui--large--padding', '0.8rem')
  root.style.setProperty('--ui--xlarge--padding', '1rem')
  root.style.setProperty('--ui--animation--baseSpeed', '.1s')
  root.style.setProperty('--gutter', '1rem')
  html.style.setProperty('font-familty', 'Roboto,Ubuntu,Fira sans-serif;')
  html.style.setProperty('--input--height', '2.1rem')
  html.style.setProperty('--input--height--small', '1.6rem')
}, 0)

//Add notepad to the bottom right that data is save via browser local storage
setTimeout(() => {
  const notesWrapper = `
<div class="keep--notes--wrapper">
<textarea class="note-body"></textarea>
  <button type='button' class='note-header'>${notes_svg}</button>
</div>
`
  document.querySelector("html").innerHTML += notesWrapper
  document.querySelector("button.note-header").addEventListener("click", () => {
    document.querySelector("textarea.note-body").classList.toggle("display")
  })
  let saved = localStorage.keepNotesText;
  if (saved) document.querySelector("textarea.note-body").value = saved;
  document.querySelector("textarea.note-body").addEventListener("input", () => {
    let keeperTextarea = document.querySelector("textarea.note-body")
    let start = keeperTextarea.selectionStart
    let end = keeperTextarea.selectionEnd
    let val = keeperTextarea.value
    localStorage.setItem('keepNotesText', val)
    this.setSelectionRange(start, end)
  })
}, 0)

//clear logs every minute
setInterval(() => { console.clear() }, 60000)
