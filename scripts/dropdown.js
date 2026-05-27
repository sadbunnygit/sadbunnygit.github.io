

const autocompletes = new Map();

document.querySelectorAll('.autocomplete').forEach (a => 
{
    a.style.backgroundColor = 'yellow';
    autocompletes.set(a.id, { html: a });
    console.log(autocompletes.get(a));
    console.log(autocompletes);
});

// get the data 
fetch('../data/autocomplete.json')
    .then(r => r.json())
    .then(loadOptions);

function loadOptions(data = "")
{
    data.forEach(id => 
    {
        console.log("load options for: ");
        autocompletes.set(id, {options: "hi"});
        console.log(autocompletes);
    });
}


document.addEventListener("click", (e) => // close when clicedk outside
{
    const wrapper = document.querySelectorAll(".autocomplete");

    // if click is outside the autocomplete component
    autocompletes.forEach (a => 
    {
        if (!a.contains(e.target)) 
        {
            a.querySelector('.dropdown').classList.add("hidden");
        }
    });
});

const parent = document.getElementById('myParent');
//const firstChild = parent.querySelector('.my-child-class');



categories = ["Just saying hi!", "Employment Opportunity"]
function renderDropdown(filter = "") 
{
    console.log("dropdown rendering");
    dropdown.innerHTML = "";

    const filtered = categories.filter
    (c =>
        c.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach
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

    dropdown.classList.toggle("hidden", filtered.length === 0);
}
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
});
