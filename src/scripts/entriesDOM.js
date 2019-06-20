// creates the journal entry HTML component
const renderJournalEntries = (entries) => {
  let divProcess = "";
  for(let i = 0; i < entries.length; i++) {
    divProcess += makeJournalEntryComponent(entries[i])
  }

  const entryHoldingLocation = document.querySelector(".entryLog")
  entryHoldingLocation.innerHTML = divProcess 
}

