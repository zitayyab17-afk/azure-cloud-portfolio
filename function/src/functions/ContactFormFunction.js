const { app } = require('@azure/functions');
const { EmailClient } = require("@azure/communication-email");
const connectionString = process.env.ACS_CONNECTION_STRING;
const emailClient = new EmailClient(connectionString);

app.http('ContactFormFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const body = await request.json();
        const name = body.name;
        const email = body.email;
        const subject = body.subject;
        const message = body.message;
        const emailMessage = {
    senderAddress: "DoNotReply@2f80a538-bf62-4eb5-bc58-3c9b1aa04512.azurecomm.net",
    content: {
        subject: `Portfolio Contact: ${subject}`,
        plainText: `
Name: ${name}
Email: ${email}

Message:
${message}
        `
    },
    recipients: {
        to: [
            {
                address: "zunaishacreations@gmail.com"
            }
        ]
    }
};
const poller = await emailClient.beginSend(emailMessage);
const sendResult = await poller.pollUntilDone();
context.log("Email send result:", sendResult);

       return {
        jsonBody: {
            success: true,
            receivedName: name,
            receivedEmail: email,
            receivedSubject: subject,
            receivedMessage: message
        }
       }
    }
});
