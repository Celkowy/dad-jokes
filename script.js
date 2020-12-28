const h1 = document.querySelector('h1')
const button = document.querySelector('button')

getJoke()

button.addEventListener('click', () => {
  getJoke()
})

function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => (h1.innerHTML = data.joke))
}
