
const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
   for (let i = 0; i < entries.length; i++){
      const entry = entries[i]
      entryContainer.innerHTML += makeJournalEntryComponent(entry)
   }
   
}

renderJournalEntries(journalEntries);

export default renderJournalEntries