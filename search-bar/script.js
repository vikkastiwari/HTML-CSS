// JavaScript code for autocomplete functionality with debounce and data display
const searchInput = document.getElementById('searchInput');
const autocompleteContainer = document.getElementById('autocompleteContainer');
let debounceTimer;

const suggestions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const searchTerm = searchInput.value;
    showAutocompleteItems(getAutocompleteSuggestions(searchTerm));
  }, 300);
});

function getAutocompleteSuggestions(searchTerm) {
  return suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function showAutocompleteItems(suggestions) {
  autocompleteContainer.innerHTML = '';

  if (suggestions.length === 0) {
    autocompleteContainer.style.display = 'none';
    return;
  }

  autocompleteContainer.style.display = 'block';

  suggestions.forEach(suggestion => {
    const autocompleteItem = document.createElement('div');
    autocompleteItem.classList.add('autocomplete-item');
    autocompleteItem.textContent = suggestion;
    autocompleteItem.addEventListener('click', () => {
      searchInput.value = suggestion;
      autocompleteContainer.style.display = 'none';
    });
    autocompleteContainer.appendChild(autocompleteItem);
  });
}

document.addEventListener('click', event => {
  if (!autocompleteContainer.contains(event.target)) {
    autocompleteContainer.style.display = 'none';
  }
});

// Display the updated data
function displayData() {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = '';

  suggestions.forEach(suggestion => {
    const item = document.createElement('p');
    item.textContent = suggestion;
    dataContainer.appendChild(item);
  });
}

// Call the displayData function initially
displayData();
