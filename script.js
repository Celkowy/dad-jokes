const h1 = document.querySelector('h1')
const button = document.querySelector('button')

getJoke()

button.addEventListener('click', () => {
  getJoke()
})

async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  console.log(res)
  const data = await res.json()

  h1.innerHTML = data.joke
}
