// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


//Import axios
import axios from 'axios'

// Get request
axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then((ref) => {
        console.log('Here is the response', ref)

        const tabs = ref.data.topics
        console.log(tabs)
        tabs.forEach((element) => {
            const eachTab = tabMaker(element)
            topics.appendChild(eachTab)
        })

    })
    .catch((err) => {
        console.log('There was an error', err)
    })
// Function tabMaker

function tabMaker (data) {
    const divTab = document.createElement('div')
    divTab.classList.add('tab')
    divTab.textContent = data
    return divTab
}

const topics = document.querySelector('topics')


    