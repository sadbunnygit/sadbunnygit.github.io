

document.addEventListener("DOMContentLoaded", () => 
{
    const toggle = document.getElementById("themeToggle");

    toggle.addEventListener("click", () => 
    {
        document.body.classList.toggle("dark");
        // save theme
        if (document.body.classList.contains("dark")) 
        {
            localStorage.setItem("theme", "dark");
        } 
        else 
        {
            localStorage.setItem("theme", "light");
        }
    });

    // load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});