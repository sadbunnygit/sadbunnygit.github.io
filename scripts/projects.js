

function scrollProjects(direction) 
{
    const container = document.getElementById("projectsContainer");
    const card = container.querySelector(".project-card");

    const cardWidth = card.offsetWidth;
    const gap = parseInt(getComputedStyle(container).gap) || 0;

    const scrollAmount = cardWidth + gap;

    container.scrollBy
    ({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}