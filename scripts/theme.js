

function toggleTheme() 
{
    document.body.classList.toggle("dark");

    // remember choice
    if (document.body.classList.contains("dark")) 
    {
        localStorage.setItem("theme", "dark");
    } 
    else     
    {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () 
{
    if (localStorage.getItem("theme") === "dark") 
    {
        document.body.classList.add("dark");
    }
};