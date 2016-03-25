# nodeproject
This project is a web app based on a concert ticketing system similiar to ticketmaster. 
The app will allow a user to enter certain details about themselves in order to purchase a ticket.
Restrictions on the data added are laid out in the mongoose schema eg. minimum age 18 and credit card number min 16 characters.
The web app will then save these details and add a unique id to each entry, these details can then be viewed, updated and deleted. 
Once an entry is created a new contact event is added to pubnub. 
A mailgun app is subscribed to the pubnub app and listens for new contact events, once a new contact is created a personalised confirmation 
email is sent to the user based on the concert they are attending. 
