import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"


API.getJournalEntries().then(entries => renderJournalEntries(entries))
const saveButton = document.querySelector(".submitEntry");

saveButton.addEventListener("click", (event) => {
 //prevents the page from refreshing
    event.preventDefault()
 // get input values from the form
 const date = document.querySelector("#journalDate").value
 const concept = document.querySelector("#concept").value
 const content = document.querySelector("#content").value
 const mood = document.querySelector("#mood").value
 //put those values into an object
 const newEntry = { 
    date, concept, content, mood 

 }

 //send that object to the database (using fetch and POST)
API.saveJournalEntry(newEntry)
.then(API.getJournalEntries)
.then(entries => renderJournalEntries(entries))

}
);

// create a selector to select ALL radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]'); //grabs element type
console.log(radioButtons);

//iterates each item in the array and then does something 
radioButtons.forEach(button => {
   button.addEventListener("click", (event) => {
      
      let mood = event.target.value
      
      API.getJournalEntries().then(entries => {
         let selectedMood = entries.filter(
            entry => {
               let isMood = false;
               if (entry.mood.toLowerCase() == mood) {
                  isMood = true;
               } return isMood
            })
            renderJournalEntries(selectedMood);
      })
   })
})
