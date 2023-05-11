const touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const articles = ['a', 'an', 'the'];

  const sortedtouristSpots = touristSpots.sort((a, b) => {
  const aWords = a.split(' ');
  const bWords = b.split(' ');

  if (articles.includes(aWords[0].toLowerCase())) {
    aWords.shift();
  }
  if (articles.includes(bWords[0].toLowerCase())) {
    bWords.shift();
  }

  const aString = aWords.join(' ');
  const bString = bWords.join(' ');
  return aString.localeCompare(bString);
});

const bandList = document.getElementById('bands');
sortedtouristSpots.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});
