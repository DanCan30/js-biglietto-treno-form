
// MILESTONE 1

    // Setting variables for discounts
const pricePerKM = .26;

const kidDiscount = pricePerKM - (pricePerKM * 15) / 100;

const seniorDiscount = pricePerKM - (pricePerKM * 35) / 100;

    // Initializing a variable with the submit button
const submit = document.getElementById("submit-button");

    // Making a function that takes the input values on submit-button click and prints them in the layout
submit.addEventListener("click", function() {
    
    // Initializing variables for inputs
    let userDistance = parseInt(document.getElementById("user-distance-input").value);
    let userAge = parseInt(document.getElementById("user-age-input").value);
    const userFirstName =  document.getElementById("user-first-name-input").value;
    const userLastName = document.getElementById("user-last-name-input").value;


    console.log(userDistance, userAge);

    let ticketCost;
    let message;

    if (isNaN(userDistance) || userDistance <= 0 || isNaN(userAge) || userAge <= 0 || userFirstName.length == 0 || userLastName.length == 0 || !isNaN(userFirstName) || !isNaN(userLastName) ) {

        message = "Please insert a valid data";
        document.querySelector(".container span").innerHTML = message;
        document.querySelector(".ticket-container").classList.add("unseen");

    } else {

        // Calculating ticket price using distance and eventual discounts
    if (userAge < 18) {
        ticketCost = userDistance * kidDiscount;
    } else if (userAge >= 65) {
        ticketCost = userDistance * seniorDiscount;
    } else {
        ticketCost = userDistance * pricePerKM;
    }

        // Initializing a variable with the final price of the ticket
    message = "The ticket price is: " + ticketCost.toFixed(2) + "€";

    console.log(ticketCost);
    console.log(message);

        // Printing the final price on the screen
    document.querySelector(".container span").innerHTML = message;

// MILESTONE 2

    // Random ticket number
    let ticketNumber = Math.floor((Math.random() * 100000) +1);

    document.querySelector("#ticket-number span:first-child").innerHTML = "Ticket n° " + ticketNumber;
    document.querySelector("#ticket-number span:nth-child(2)").innerHTML = "€" + ticketCost.toFixed(2);

    // More user infos that will appear on the ticket

    document.querySelector("#ticket-info span:first-child").innerHTML = userLastName;
    document.querySelector("#ticket-info span:nth-child(2)").innerHTML = userFirstName;
    document.querySelector("#ticket-info span:nth-child(3)").innerHTML = userDistance + "Km";

    // Type of discount appear on the ticket if needed
    if (userAge < 18) {
        document.querySelector("#ticket-info span:nth-child(4)").innerHTML = "Discount applied: 15%";
    } else if (userAge >= 65) {
        document.querySelector("#ticket-info span:nth-child(4)").innerHTML = "Discount applied: 35%";
    } else {
        document.querySelector("#ticket-info span:nth-child(4)").innerHTML = "";
    }

    // The ticket will appear when the user submit his/her infos
    document.querySelector(".ticket-container").classList.remove("unseen");
}
}
);
