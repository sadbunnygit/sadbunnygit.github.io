

class Autocomplete 
{
    constructor(html, id, categories) 
    {
        this.html = html;
        this.id = id;
        this.categories = categories;
    }
}

const autocompletes = document.querySelectorAll('.autocomplete');
const autocompletes2 = [];
autocompletes.forEach (a => 
{
    a.style.backgroundColor = 'yellow';
    console.log(a);
    a = new Autocomplete(a, a.id);
    console.log(a);
});


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
