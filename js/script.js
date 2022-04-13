const $container = document.querySelector('.container')
const $london = document.querySelector('.london')
const $moscow = document.querySelector('.moscow')
const $vaduz = document.querySelector('.vaduz')

$london.addEventListener('click' , e => {
  e.preventDefault()

  $container.innerHTML = `
    <h1>London</h1>
    <p>London is the capital UK</p>
  `

  $london.classList.add('active')
  $moscow.classList.remove('active')
  $vaduz.classList.remove('active')
})

$moscow.addEventListener('click' , e => {
  e.preventDefault()

  $container.innerHTML = `
    <h1>Moscow</h1>
    <p>Moscow is the capital Russia</p>
  `

  $moscow.classList.add('active')
  $vaduz.classList.remove('active')
  $london.classList.remove('active')
})

$vaduz.addEventListener('click' , e => {
  e.preventDefault()

  $container.innerHTML = `
    <h1>Vaduz</h1>
    <p>Vaduz is the capital Liechtenstein</p>
  `

  $vaduz.classList.add('active')
  $moscow.classList.remove('active')
  $london.classList.remove('active')
})