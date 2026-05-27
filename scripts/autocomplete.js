
autocompletes = new Map();

// get the data 
fetch('../data/autocomplete.json')
    .then(r => r.json())
    .then(loadOptions);

function loadOptions(data = "")
{
    console.log(autocompletes);
    data.forEach(ac => 
    {
        autocompletes.set(
                            ac.id, 
                            {
                                input: document.getElementById(ac.id).querySelector("input"),
                                dropdown: document.getElementById(ac.id).querySelector(".dropdown")
                            }
                        );
        console.log(autocompletes.get(ac.id))
        autocompletes.get(ac.id).input.addEventListener("input", () =>  // filters list as user types
        {
            console.log("typed in category: ", autocompletes.get(ac.id).input.value);
            renderDropdown(ac);
        });
        autocompletes.get(ac.id).input.addEventListener("focus", () => // open dropdown when they click box
        {
            console.log("clicked in category");
            renderDropdown(ac);
            autocompletes.get(ac.id).dropdown.classList.remove("hidden");
        });
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


function renderDropdown(ac) 
{
    console.log("dropdown rendering");
    const dropdown = autocompletes.get(ac.id).dropdown;
    const input =  autocompletes.get(ac.id).input;
    const filter = input.value;
    dropdown.innerHTML = "";


    const filtered = ac.options.filter 
    (c =>
        c.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach (c => 
    {
        const div = document.createElement("div");
        div.textContent = c;

        div.onclick = () => 
        {
            input.value = c;
            dropdown.classList.add("hidden");
        };

        dropdown.appendChild(div);
    });

    dropdown.classList.toggle("hidden");
}

