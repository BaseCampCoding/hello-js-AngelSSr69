let visitorName = "Bob";
let visitorAge = 26;
let visitorTicketId = "Tic48";

let visitor = {
    Name : visitorName, 
    Age: visitorAge, 
    ticketId: visitorTicketId
}
console.log(visitor);

//
visitor.ticketId = null;
console.log(visitor)

//
let tickets = {
    "Ticket1" : "Joe",
    "Ticket2" : "Mama",
    "Ticket3" : null,
    "Ticket4" : null,
    "Ticket5" : "Michel Jakson",
};

let ticketIdToCheck = "Ticket1";
let ticketStatusResult;
if(!(ticketIdToCheck in tickets)) {
    ticketStatusResult = 'unknown ticket id';
}
else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = 'not sold';
}
else{
    ticketStatusResult = 'sold to ' + tickets[ticketIdToCheck];
}
//console.log(ticketStatusResult)

//
let simpleTicketStatusResult;
if(ticketIdToCheck in tickets && tickets[ticketIdToCheck]) {
    simpleTicketStatusResult = tickets[ticketIdToCheck]
}
else {
    simpleTicketStatusResult = "invalid ticket"
}
console.log(simpleTicketStatusResult)

//
let visitorWithGtc = {
    name: "Bill",
    gtc: {version: "v2.0"}
}

let gtcVersion;
if (visitorWithGtc.gtc && visitorWithGtc.gtc.version){
    gtcVersion = visitorWithGtc.gtc.version;
}
console.log(gtcVersion)