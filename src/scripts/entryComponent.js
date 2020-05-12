/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/


const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
     return `
            <section class="entry--${journalEntry.id}">
                <h1> ${journalEntry.concept} </h1>
                ${journalEntry.content} <br> 
                ${journalEntry.date}
                <aside> Mood: ${journalEntry.mood}</aside>
                <button id="deleteEntry--${journalEntry.id}">
                Delete Entry
            </button>
             </section>
 
    `
 }

 export default makeJournalEntryComponent
 