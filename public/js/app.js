console.log('Client side javascript is loaded')


fetch('http://localhost:3000/weather?address=').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        }
        else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'fdsfe'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageTwo.textContent = 'Loading!'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
           
            messageTwo.textContent = data.error
        }
        else {
           
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})

})