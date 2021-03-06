const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function (response){
           const processingPromise = response.json();
           return processingPromise;
        })
        .then(function (processedResponse){
           const img = document.createElement("img");
           document.getElementById("doggy").src=processedResponse.message;
        });
}


document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);