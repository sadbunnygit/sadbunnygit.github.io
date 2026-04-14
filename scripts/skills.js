

// - not in a function happens on load -
// get the data 
fetch('../data/skills.json')
    .then(r => r.json())
    .then(renderSkills);

// - function -
// load the html for that data
function renderSkills(data) 
{
    const root = document.getElementById("skills");

    data.forEach(section => 
    {
        const sectionEl = document.createElement("div"); // create the box for the type of skill

        const title = document.createElement("h3"); // create it's header
        title.textContent = section.category;

        const grid = document.createElement("div"); // make it a grid, so nice alignment
        grid.className = "skill-grid";

        section.skills.forEach(skill => 
        {
            const card = document.createElement("div"); // create the card for each skill
            card.className = `skill-card ${skill.level}`; // different style based on level (colour changes)

            card.innerHTML = // write the text
            `
                <h3>${skill.name}</h3>
                <span class="skill-tag ${skill.level}">${skill.level}</span>
                <p>${skill.description || ""}</p>
            `;

            if (skill.uses?.length) // if there are uses/examples of use for that skill
            {
                const details = document.createElement("details"); // make it a dropdown

                const summary = document.createElement("summary");
                summary.textContent = "Where I used it";

                const ul = document.createElement("ul"); // list the given uses
                skill.uses.forEach(u => 
                {
                    const li = document.createElement("li");
                    li.textContent = u;
                    ul.appendChild(li);
                });

                // add the stuff into eachother
                details.appendChild(summary); 
                details.appendChild(ul);
                card.appendChild(details);
            }
            grid.appendChild(card);
        });

        sectionEl.appendChild(title);
        sectionEl.appendChild(grid);
        root.appendChild(sectionEl);
    });
}
