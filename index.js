

window.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("inputBox");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("resultsDiv");
    
    function makeApiCall(name) {

        url = "https://api.agify.io?name=" + name;

        fetch(url).then
        ((res) => {
            return res.json();
        }).then
        ((response) => {
            resultDiv.innerHTML = response.age;
        })
        .catch( (error) => {
            console.log(error) 
        })
    
    };
    
    submitButton.addEventListener("click", () => {
        makeApiCall(nameInput.value)
    });


});

