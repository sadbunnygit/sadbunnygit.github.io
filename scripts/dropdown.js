
const categoryInput = document.getElementById("category");
categories = ["1","2","1,2,3,4,5,6,7,10,14,41,4","2","1,2,3,4,5,6,7,10,14,41,4","2","1,2,3,4,5,6,7,10,14,41,4"]
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
document.addEventListener("click", (e) => // close when clicedk outside
{
    const wrapper = document.querySelector(".autocomplete");

    // if click is outside the autocomplete component
    if (!wrapper.contains(e.target)) 
    {
        dropdown.classList.add("hidden");
    }
});