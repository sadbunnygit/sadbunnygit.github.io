

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