
    // Setting variables for discounts
const pricePerKM = .26;

const kidDiscount = (pricePerKM * 15) / 100;
const kidTicket = pricePerKM - kidDiscount;

const seniorDiscount = (pricePerKM * 35) / 100;
const seniorTicket = pricePerKM - seniorDiscount;

    // Initializing a variable with the submit button
const submit = document.getElementById("submit-button");

    // Making a function that takes the input values on submit-button click and prints them in the layout
submit.addEventListener("click", function() {
    
    let userDistance = document.getElementById("user-distance-input").value;
    let userAge = document.getElementById("user-age-input").value;

    console.log(userDistance, userAge);

    let ticketCost;
    
        // Calculating ticket price using distance and eventual discounts
    if (userAge < 18) {
        ticketCost = userDistance * kidTicket;
    } else if (userAge >= 65) {
        ticketCost = userDistance * seniorTicket;
    } else {
        ticketCost = userDistance * pricePerKM;
    }

        // Initializing a variable with the final price of the ticket
    let finalMessage = "The ticket price is: " + ticketCost.toFixed(2) + "€";

    console.log(ticketCost);
    console.log(finalMessage);

        // Printing the final price on the screen
    document.querySelector("span").innerHTML = finalMessage;
}
);
