

// - not in a function happens on load -
// get the data 
fetch('../data/work.json')
    .then(r => r.json())
    .then(renderWork);

// - function -
// load the html for that data
function renderWork(data) 
{
    console.log("Debug: Running renderWork");
    const root = document.getElementById("work");
    const list = document.createElement("ul");

    data.forEach(job => 
    {
        const card = document.createElement("li");
        card.className = "work-card";

        card.innerHTML = 
        `
            <img 
                class="work-logo" 
                src=${job.logo.src}
                alt=${job.logo.alt}
            />
            <h3>${job.title}</h3>
        `;

        list.appendChild(card);
    });
    root.appendChild(list);
}