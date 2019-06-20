
// modifies the DOM
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