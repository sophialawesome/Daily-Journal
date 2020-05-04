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

 export default makeJournalEntryComponent
 