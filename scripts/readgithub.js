fetch("https://api.github.com/repos/sadbunnygit/sadbunnygit.github.io/branches/main")
.then(response => 
{
    response.json().then(json => 
    {
        console.log("github stuff:");
        console.log(json);
    });
})
.catch(error => 
{
    console.log(error);
});
