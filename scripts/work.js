

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
    list.className = "work-wrapper";

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
            <span class="work-info">
                <h3>${job.title}</h3>
                <p class="work-meta">${job.company}</p>
                <p class="work-meta">${job.location}</p>
                <p>${job.timeline}</p>
            </span>
        `;

        const bullets = document.createElement("ul");
        bullets.className = "work-bullets";
        job.bullets.forEach(i => 
        {
            const item = document.createElement("li");
            item.textContent = i;
            bullets.appendChild(item);
        })
        card.appendChild(bullets);
        list.appendChild(card);
    });
    root.appendChild(list);
}