// deals with getting the data
// fetch("http://localhost:3000/entries") 
//     .then(data => data.json())  
//     .then(entries => {console.log(entries)
//     })

// Copied from chapter
const API = {
  getJournalEntries () {
      return fetch("http://localhost:8088/entries")
          .then(entries => entries.json())
  }
}