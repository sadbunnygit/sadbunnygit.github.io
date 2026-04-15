

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


        card.addEventListener("click", () => 
        {
            openProject(project);
        });
        root.appendChild(card);
    });
}

function openProject(project) 
{
    console.log("Open preview for:", project);

    const preview = document.getElementById("projectPreview");

    document.getElementById("previewTitle").textContent = project.title;
    document.getElementById("previewDescription").textContent = project.description || "";

    const linksDiv = document.getElementById("previewLinks");
    linksDiv.innerHTML = "";

    if (project.links) 
    {
        project.links.forEach(link => 
        {
            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.textContent = link.label;
            linksDiv.appendChild(a);
        });
    }

    const embedDiv = document.getElementById("previewEmbed");
    embedDiv.innerHTML = "";

    if (project.game) 
    {
        const iframe = document.createElement("iframe");
        Object.entries(project.game).forEach(([k, v]) => 
        {
            if (v != null) iframe.setAttribute(k, v);
        });
    }

    preview.style.display = "flex";
}

function closeProject() 
{
    document.getElementById("projectPreview").style.display = "none";
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