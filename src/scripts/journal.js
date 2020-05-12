import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import eventsManager from "./events.js"


console.log(eventsManager.registerDeleteListener);


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

let entryLog = document.querySelector(".entryLog")

entryLog.addEventListener("click", event => {
   if (event.target.id.startsWith("deleteEntry--")) {
      console.log("Successful click");
      const entryToDelete = event.target.id.split("--")[1]

      API.deleteJournalEntry(entryToDelete)  
      entryLog.innerHTML=""
      API.getJournalEntries().then(renderJournalEntries)
   }
})

//invokes the method that attaches the delete event listener
//events.registerDeleteListener()

API.getJournalEntries().then(renderJournalEntries)
