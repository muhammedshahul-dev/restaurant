const content = document.getElementById('content')

const hero = document.createElement("div")
const heroDiv = document.createElement('div');
content.appendChild(hero)

const heading1 = document.createElement('h1')
heading1.textContent= "Discover recipes worth cooking";
heroDiv.appendChild(heading1)
heroDiv.classList.add("hero")
const p = document.createElement('p');
p.textContent ="From comforting homemade meals to refreshing drinks, discover simple recipes that bring good food to your table.";
heroDiv.appendChild(p)

