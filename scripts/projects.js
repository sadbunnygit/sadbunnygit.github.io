

// - not in a function happens on load -
// get the data 
fetch('../data/projects.json')
    .then(r => r.json())
    .then(renderProjects);

function renderProjects(data) 
{
    const root = document.getElementById("projectsContainer");

    data.forEach(project => 
    {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = 
        `
            <h3>${project.title}</h3>
            <p>${project.description || ""}</p>
        `;
        root.appendChild(card);
    });
}

function scrollProjects(direction) 
{
    const container = document.getElementById("projectsContainer");
    const width = container.offsetWidth/3;

    container.scrollBy
    ({
        left: direction * width,
        behavior: "smooth"
    });
}