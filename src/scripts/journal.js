import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import makeJournalEntryComponent from "./entryComponent.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries);