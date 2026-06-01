

fetch("https://api.github.com/repos/sadbunnygit/sadbunnygit.github.io/branches/main")
.then(response => 
{
    response.json().then(json => 
    {
        console.log("github stuff:");
        console.log(json);
        console.log("date (as it in the json): " + json.commit.commit.author.date);
        console.log("date (just date): " + json.commit.commit.author.date.split("T")[0]);
        document.getElementById("last-updated").textContent = json.commit.commit.author.date.split("T")[0];
    });
})
.catch(error => 
{
    console.log(error);
});

