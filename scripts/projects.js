

function scrollProjects(direction) 
{
    const container = document.getElementById("projectsContainer");
    const width = container.offsetWidth;

    container.scrollBy
    ({
        left: direction * width,
        behavior: "smooth"
    });
}