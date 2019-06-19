

// journalEntryArray.push(objectsJournalEntry1)
// journalEntryArray.push(objectsJournalEntry2)
// journalEntryArray.push(objectsJournalEntry3)
// journalEntryArray.push(objectsJournalEntry4)
// console.log(journalEntryArray) 



function makeJournalEntryComponent(journalEntry) {
  return `
  <div>
  <h1>${journalEntry.date}</h1>
  <h2>${journalEntry.conceptsCovered}</h2>
  <h3>${journalEntry.journalEntry}</h3>
  <p>${journalEntry.mood}</p>
  </div>
  `
}



const renderJournalEntries = (entries) => {
  let divProcess = "";
  for(let i = 0; i < entries.length; i++) {
    divProcess += makeJournalEntryComponent(entries[i])
  }

  const entryHoldingLocation = document.querySelector(".entryLog")
  entryHoldingLocation.innerHTML = divProcess 
}

// renderJournalEntries(journalEntryArray)

fetch("http://localhost:3000/entries") 
    .then(data => data.json())  
    .then(entries => {console.log(entries)
    })