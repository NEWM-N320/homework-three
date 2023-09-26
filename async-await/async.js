//Using Async and Await to display dog pictures

//function called fetchDogges will get the API address
async function fetchDoggies() {
        //fetch the API
            const dogLink = await fetch("https://dog.ceo/api/breeds/image/random/20");

            // parse the API into json
            const displayDogs = await dogLink.json();

            //return the data with info from the API we want

            //message is the url links to the images
            return displayDogs.message;
    }

    //once previous actions have been successful...
    fetchDoggies().then((data) => {

        //grab the dog-container ID created in html
        //this holds all of the dog images in one parent div
        const dogContainer = document.getElementById("dog-container");

        //using a foreach learned in class
        //this will allow us to repeat the same process for each dog picture (there is 20 total, will repeat this 20 times)

        //imageUrl is going to be the data being passed (message value declared at the top)
            data.forEach((imageUrl) => {

                //creating a div to hold dog images
                const dogHolder = document.createElement("div");

                //create a class for the dog holder
                dogHolder.classList.add("dog-holder");
    

                //create an image tag
                const img = document.createElement("img");

                //create a class for the image tag
                img.classList.add("dog-img");

                //the source for the image is the dog url
                img.src = imageUrl;
    

                //appending to allow them to show up on the screen

                //dogHolder appends its child, img
                dogHolder.appendChild(img);

                //dogContainer appends its child, dogHolder
                dogContainer.appendChild(dogHolder);
            });

            //if the above actions are unsuccessful
}).catch((error)=>{ //catch an error

        //in console, display message 
        console.error("Failed to fetch data.");

        //grab the id called errors created in html
            let errorMsg = document.getElementById("errors");

            //innerhtml will be the actual error 
            errorMsg.innerHTML = error;
});