
const journalEntryArray = [
{
  date: "06-10-2019",
  conceptsCovered: "Manipulating the DOM",
  journalEntry: "lorem ipsum",
  mood: "good"
},
{
  date: "06-11-2019",
  conceptsCovered: "JavaScript Objects",
  journalEntry: "Lorem ipsum",
  mood: "good"
},
{
  date: "06-12-2019",
  conceptsCovered: "Functions and Logic",
  journalEntry: "lorem ipsum",
  mood: "good"
},
{
  date: "06-13-2019",
  conceptsCovered: "Building DOM Components",
  journalEntry: "lorem ipsum",
  mood: "good"
}
]

// journalEntryArray.push(objectsJournalEntry1)
// journalEntryArray.push(objectsJournalEntry2)
// journalEntryArray.push(objectsJournalEntry3)
// journalEntryArray.push(objectsJournalEntry4)
console.log(journalEntryArray) 



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

renderJournalEntries(journalEntryArray)