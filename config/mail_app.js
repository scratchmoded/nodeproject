
var api_key = 'key-cbc9c537ff15f0f3f45019bb770db8f7';
var domain = 'sandboxe36e582cbeaf4ac2aa240485dee3bac8.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var pubnub = require('./pubsub.js');

// Subscribe to the demo_tutorial channel
pubnub.subscribe({
    channel: 'create_contact_event',
    message: function(m){console.log('Send email to '+JSON.parse(m).email);
            var data = {
            from: 'TicketDude <sales@ticketdude.ie>',
            to: JSON.parse(m).email,
            subject: 'You are going to '+JSON.parse(m).concert,
            text: 'Here is your ticket, the concert is on ' +JSON.parse(m).concert_date,
            
            };

        mailgun.messages().send(data, function (error, body) {console.log(body);
        });
    }
});