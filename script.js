function switchExpedition(expedition) {
  let h1 = document.querySelector('h1')
  let html = document.querySelector('html')
  let astronaut = document.querySelector('#astronaut')
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

/*let num = 1
function la() {
  let imgVisible = '#img-moon-' + num
  let selectedImg = document.querySelector(imgVisible)
  selectedImg.classList.toggle('invisible')
  num = num + 1
  if (num > 3) {
    num = 1
  }
  imgVisible = '#img-moon-' + num
  selectedImg = document.querySelector(imgVisible)
  selectedImg.classList.toggle('invisible')
}
setInterval(la, 2000)*/

/*let select_img = document.getElementById('img-moon-1')
let slider_img = Array.from(document.querySelectorAll('.slider-img img'))
const slider2 = [...slider_img]
console.log(typeof slider2)
let img_index = 1
function slider(its_a_interval, input_number) {
  if (its_a_interval) {
    select_img.classList.toggle('invisible')
    slider_img.map(img => {
      let x = true
      if (x) {
        console.log(typeof x)
        console.log('hei')
        return (img_index = slider_img.indexOf(img) + 2)
      }
    })
    console.log(img_index)
    select_img = document.getElementById('img-moon-' + img_index)
    select_img.classList.toggle('invisible')
  } else {
    select_img.classList.toggle('invisible')
    select_img = document.getElementById('img-moon-' + input_number)
    select_img.classList.toggle('invisible')
  }
}
setInterval(() => {
  slider(true, 0)
}, 2000)*/
let select_img = document.getElementById('img-moon-1')
function slider(x, input_number) {
  select_img.classList.toggle('invisible')
  console.log(input_number)
  select_img = document.getElementById('img-moon-' + input_number)
  select_img.classList.toggle('invisible')
}
