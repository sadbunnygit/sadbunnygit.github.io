

const bellsBtn = document.getElementById("bellsButton");
const bellsNwhistles = document.getElementById("bellsNwhistles");

bellsBtn.addEventListener("click", () => 
{
    bellsNwhistles.play();
});
