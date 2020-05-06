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