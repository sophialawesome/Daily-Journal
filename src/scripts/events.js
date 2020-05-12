import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

let entryContainer = document.querySelector(".entryLog")

let eventsManager = {
    registerDeleteListener () {
        entryContainer.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteEntry--")){
                const entryToDelete = event.target.id.split("--")[1]
    
                API.deleteJournalEntry(entryToDelete)
                    .then(API.getJournalEntries)
                    .then(renderJournalEntries)
            }
        })
    }
}

let test = "success"

export default { eventsManager }