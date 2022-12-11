function switchExpedition(expedition) {
  let h1 = document.querySelector('h1')
  let html = document.querySelector('html')
  let astronaut = document.querySelector('#astronaut')
  console.log(expedition)
  if (expedition == 'mars') {
    h1.textContent = 'mars'
    html.classList.add('mars')
    astronaut.style.filter = 'sepia(0.8)'
  }
  if (expedition == 'moon') {
    h1.textContent = 'the moon'
    html.classList.remove('mars')
    astronaut.style.filter = 'sepia(0)'
  }
}
