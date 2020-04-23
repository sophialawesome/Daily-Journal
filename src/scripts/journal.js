const journalEntries = [ 
   {
   date: "2020-04-17",
   concept: "functions",
   content: "reviewed functions, which are essentially recipes that create tasks",
   mood: "Okay"
   },

   {
      date: "2020-04-22",
      concept: "APIs",
      content: "learned about Application Programming Interfaces, essentially a database used as a tool by developers to retrieve data",
      mood: "Sad"
   }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
   // Create your own HTML structure for a journal entry
   return `
         <div class="entryLog">
            <h1> ${journalEntry.concept} </h1>

            <section>
            ${journalEntry.content} <br> 
            ${journalEntry.date}</section>
            <aside> Mood: ${journalEntry.mood}</aside>
        </div>

   `
}

const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
   for (let i = 0; i < entries.length; i++){
      const entry = entries[i]
      entryContainer.innerHTML += makeJournalEntryComponent(entry)
   }
   
}

renderJournalEntries(journalEntries);