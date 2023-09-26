//Promises Assignment

//function to fetch API and parse it into json

function quotableData() {

        //fetch the API
        return fetch('https://api.quotable.io/quotes?limit=20').then(quotes => quotes.json()); // this will directly parse the quotes into json
      }
      

      //function to display the quotes
      function displayQuotables() {

        //grab the function created above
        quotableData().then(data => {

        //grab the quote-container div created in html
            const quoteContainer = document.getElementById('quote-container');
      

            //using a loop, iterate through each quotes and display the info in specific tags
            data.results.forEach(quote => {

                //create a div
              const quotes = document.createElement('div');

              //call it quote
              quotes.classList.add('quote');

              //set the innerHTML to be the quote and the author of the quote
              //content needs " ", author needs -
              quotes.innerHTML = `
                <p class = "strong-quote">"${quote.content}"</p>
                <p class = "strong-author">- ${quote.author}</p> `;

              //append the quote container to its child, quotes
              quoteContainer.appendChild(quotes);
            });

            //if unsuccessful...
          }).catch(error => { //catch an error


            //console the error    
            console.log("Failed to fetch data.");
            
            //grab the error-message div in html and set its innerhtml to be the error message
            const errorMessage = document.getElementById('error-message').innerHTML += error;
          });
      }
      


//invoke the displayQuotables function to run everything
displayQuotables();
      