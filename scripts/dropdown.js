
autocompletes = new Map();

// get the data 
fetch('../data/autocomplete.json')
    .then(r => r.json())
    .then(loadOptions);

function loadOptions(data = "")
{
    data.forEach(a => 
    {
        console.log("load options for: ");
        autocompletes.set(a.id, a.options);
        renderDropdown(a);
    });
    console.log(autocompletes);
}


document.addEventListener("click", (e) => // close when clicedk outside
{
    const ac = document.querySelectorAll(".autocomplete");

    // if click is outside the autocomplete component
    ac.forEach (a => 
    {
        if (!a.contains(e.target)) 
        {
            a.querySelector('.dropdown').classList.add("hidden");
        }
    });
});

const parent = document.getElementById('myParent');
//const firstChild = parent.querySelector('.my-child-class');


function renderDropdown(ac) 
{
    console.log("dropdown rendering");
    const dropdown = document.getElementById(ac.id).querySelector(".dropdown");
    dropdown.innerHTML = "";

    ac.options.forEach
    (c => {
        const div = document.createElement("div");
        div.textContent = c;

        div.onclick = () => 
        {
            categoryInput.value = c;
            dropdown.classList.add("hidden");
        };

        dropdown.appendChild(div);
    });

    dropdown.classList.toggle("hidden");
}
/*
categoryInput.addEventListener("input", () =>  // filters list as user types
{
    console.log("typed in category");
    renderDropdown(categoryInput.value);
});
categoryInput.addEventListener("focus", () => // open dropdown when they click box
{
    console.log("clicked in category");
    renderDropdown(categoryInput.value);
    dropdown.classList.remove("hidden");
});*/
