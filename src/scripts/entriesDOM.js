import makeJournalEntryComponent from "./entryComponent.js";


const renderJournalEntries = (entries) => {

   const entryContainer = document.querySelector(".entryLog");

   entryContainer.innerHTML = "";
   
   for (let i = 0; i < entries.length; i++){
      const entry = entries[i]
      entryContainer.innerHTML += makeJournalEntryComponent(entry)
   }
   
}


export default renderJournalEntries