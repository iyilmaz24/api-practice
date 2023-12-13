

window.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("inputBox");
    const submitButton = document.getElementById("submitButton");
    const resultDiv = document.getElementById("resultsDiv");

    async function makeApiCall(name) {

        url = "https://api.agify.io?name=" + name;
        try {
            const res = await fetch(url);
            const response = await res.json();
            resultDiv.innerHTML = response.age;
        } catch(error) {
            console.log(error) 
        }
    
    };
    
    submitButton.addEventListener("click", () => {
        makeApiCall(nameInput.value)
    });


});

    
    // OLD CODE WE REFACTORED FROM INTO ASYNC/AWAIT FORMAT

    // function makeApiCall(name) {

    //     url = "https://api.agify.io?name=" + name;

    //     fetch(url).then
    //     ((res) => {
    //         return res.json();
    //     }).then
    //     ((response) => {
    //         resultDiv.innerHTML = response.age;
    //     })
    //     .catch( (error) => {
    //         console.log(error) 
    //     })