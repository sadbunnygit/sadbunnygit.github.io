

// - not in a function happens on load -
// get the data 
fetch('../data/projects.json')
    .then(r => r.json())
    .then(renderProjects);

function renderProjects(data) 
{
    console.log("Debug: Running renderProjects");
    const root = document.getElementById("projectsContainer");

    data.forEach(project => 
    {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = 
        `
            <h3>${project.title}</h3>
            <p>${project.snippet || project.description || ""}</p>
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
    document.getElementById("previewDescription").textContent = project.description || project.snippet || "";

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

    if (project.demo)
    {
        if (project.demo.html) 
        {
            embedDiv.innerHTML = project.demo.html;
        }
        else if (project.demo.iframe) 
        {
            const iframe = document.createElement("iframe");
            Object.entries(project.demo.iframe).forEach(([k, v]) => 
            {
                if (v != null) iframe.setAttribute(k, v);
            });
            embedDiv.appendChild(iframe);
        }
    }

    preview.style.display = "flex";
}

function closeProject() 
{
    document.getElementById("projectPreview").style.display = "none";
    const embedDiv = document.getElementById("previewEmbed");
    const iframe = embedDiv.querySelector("iframe");
    if (iframe) 
    {
        iframe.src = "about:blank"; // forces stop
    }
    embedDiv.innerHTML = "";
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