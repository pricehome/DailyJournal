// deals with getting the data
// Copied from chapter
const API = {
  getJournalEntries () {
      return fetch("http://localhost:8088/entries")
          .then(entries => entries.json())
  }
}





