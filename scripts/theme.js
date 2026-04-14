

document.addEventListener("DOMContentLoaded", () => 
{
    const toggle = document.getElementById("themeToggle");

    const lightIcon = "./assets/icons/lightmode.png";
    const darkIcon = "./assets/icons/darkmode.png";


    toggle.addEventListener("click", () => 
    {
        document.body.classList.toggle("dark");
        // save theme
        if (document.body.classList.contains("dark")) 
        {
            localStorage.setItem("theme", "dark");
            toggle.src = darkIcon;
        } 
        else 
        {
            localStorage.setItem("theme", "light");
            toggle.src = lightIcon;
        }
    });

    // load saved theme
    if (localStorage.getItem("theme") === "dark") 
    {
        document.body.classList.add("dark");
        toggle.src = darkIcon;
        return;
    }
    toggle.src = lightIcon;
});