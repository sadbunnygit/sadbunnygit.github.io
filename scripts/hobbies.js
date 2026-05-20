

// - not in a function happens on load -
// get the data 
fetch('../data/hobbies.json')
    .then(r => r.json())
    .then(renderHobbies);

// - function -
// load the html for that data
function renderHobbies(data) 
{
    console.log("Debug: Running renderHobbies");
    const root = document.getElementById("hobbies");
    const grid = document.createElement("div"); // make it a grid, so nice alignment
    grid.className = "card-grid";
    data.forEach(hob => 
    {
        const card = document.createElement("div"); // create the card for each skill
        card.className = `card ${hob.level}`; // different style based on level (colour changes)

        card.innerHTML = // write the text
        `
            <h3>${hob.name}</h3>
            <span class="tag ${hob.level}">${hob.level}</span>
        `;

        grid.appendChild(card);
    });
    root.appendChild(grid);
}
