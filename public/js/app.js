console.log('Client side javascript file is loaded!')

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.forecast.location.name + ', ' + data.forecast.location.country
                messageTwo.textContent = data.forecast.current.condition.text + '. It is currently ' 
                + data.forecast.current.temp_c + 'C degree out.' + ' It feels like ' 
                + data.forecast.current.feelslike_c + 'C degree out. The humidity is ' 
                + data.forecast.current.humidity + '%.'
            }
        })
    })
})