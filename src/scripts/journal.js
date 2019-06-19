
// journalEntryArray.push(objectsJournalEntry1)
// journalEntryArray.push(objectsJournalEntry2)
// journalEntryArray.push(objectsJournalEntry3)
// journalEntryArray.push(objectsJournalEntry4)
// console.log(journalEntryArray) 

// modifies the DOM
// function makeJournalEntryComponent(journalEntry) {
//   return `
//   <div>
//   <h1>${journalEntry.date}</h1>
//   <h2>${journalEntry.conceptsCovered}</h2>
//   <h3>${journalEntry.journalEntry}</h3>
//   <p>${journalEntry.mood}</p>
//   </div>
//   `
// }

// creates the journal entry HTML component
// const renderJournalEntries = (entries) => {
//   let divProcess = "";
//   for(let i = 0; i < entries.length; i++) {
//     divProcess += makeJournalEntryComponent(entries[i])
//   }

//   const entryHoldingLocation = document.querySelector(".entryLog")
//   entryHoldingLocation.innerHTML = divProcess 
// }

// renderJournalEntries(journalEntryArray)
// deals with getting the data

// fetch("http://localhost:3000/entries") 
//     .then(data => data.json())  
//     .then(entries => {console.log(entries)
//     })








/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(renderJournalEntries)