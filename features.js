function generateTable() {
    var numPlayers = parseInt(document.getElementById('numPlayers').value);
    var table = document.getElementById('playersTable');
  
    // Clear existing table content
    table.innerHTML = '';
  
    // Generate headers for player names starting from index 1
    var headerRow = table.insertRow();
    var hullNumberCell = headerRow.insertCell();
    hullNumberCell.textContent = 'Hull nummer';
  
    for (var i = 1; i <= numPlayers; i++) {
      var headerCell = headerRow.insertCell();
      var playerName = prompt('Enter name for Player ' + i);
      headerCell.textContent = playerName || 'Player ' + i;
    }
  
    // Generate rows with editable cells for user input
    var defaultRowCount = 9; // Default number of rows
    for (var j = 0; j < defaultRowCount; j++) {
      var row = table.insertRow();
  
      for (var k = 0; k <= numPlayers; k++) {
        var cell = row.insertCell();
        if (k === 0) {
          cell.setAttribute('contenteditable', 'true'); // Allow cell content editing in the first column
          cell.addEventListener('click', function(event) {
            var userInput = prompt('Enter data:');
            event.target.textContent = userInput || ''; // Fill the cell with user input
          });
        } else {
          cell.setAttribute('contenteditable', 'true'); // Allow cell content editing for other players
          cell.addEventListener('click', function(event) {
            var userInput = prompt('Enter data:');
            event.target.textContent = userInput || ''; // Fill the cell with user input
          });
        }
      }
    }
  
    // Create a button to add new row
    var addButton = document.createElement('button');
    addButton.textContent = 'Add Row';
    addButton.addEventListener('click', function() {
      var newRow = table.insertRow();
      for (var k = 0; k <= numPlayers; k++) {
        var newCell = newRow.insertCell();
        newCell.setAttribute('contenteditable', 'true'); // Allow cell content editing for the new row
        newCell.addEventListener('click', function(event) {
          var userInput = prompt('Enter data:');
          event.target.textContent = userInput || ''; // Fill the cell with user input
        });
      }
    });
  
    // Append the button below the table
    table.parentNode.appendChild(addButton);
  }