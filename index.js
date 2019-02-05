"use strict";

function getImages(inputNumber){
    console.log("getImages ran");
    fetch(`https://dog.ceo/api/breeds/image/random/${inputNumber}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson, inputNumber))
    .catch(error => alert ('Something went wrong. Try again later'));
    
}

function displayImages(responseJson, indexNumber){
    console.log("displayImages ran");
    console.log(responseJson);
    $(".images-section").empty();
    
    for (let i = 0; i < indexNumber; i++){

        
        $(".images-section").append(`<img src="${responseJson.message[i]}">`);
        console.log(responseJson.message[i]);

    }
    
    $(".images-section").removeClass("hidden");
}

function watchForm(){
    console.log("watchForm ran");
    $("form").submit(event => {
        event.preventDefault();
        let inputNumber = document.getElementById("input-number").value;
        console.log(inputNumber);
        getImages(inputNumber);
    })
}

$(function loadApp(){
    console.log("loadApp ran");
    watchForm();
});