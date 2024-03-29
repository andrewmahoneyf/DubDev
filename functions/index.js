// The Cloud Functions for Firebase SDK to create Cloud Functions and setup
// triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
// SendGrid mail server external API
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY); .env file isn't workign for
// some reason
sgMail.setApiKey('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');

// Listen for changes in all documents and all subcollections
exports.modifyMessages = functions.firestore
    .document('messages/{email}/emails/{list}')
    .onWrite((change, context) => {
        // Get an object with the current document value. If the document does not
        // exist, it has been deleted.
        const document = change.after.exists
            ? change.after.data()
            : null;

        // Send data to SendGrid mail server
        const msg = {
            to: 'info@dubdev.com',
            from: document.email,
            subject: 'New contact form submission',
            text: 'Contact form submission',
            html: '<table style="border-collapse:collapse;width:100%;"><tr><th style="border:1px so' +
                    'lid #dddddd;text-align:left;padding:8px;">Name</th><th style="border:1px solid #' +
                    'dddddd;text-align:left;padding:8px;">Email</th><th style="border:1px solid #dddd' +
                    'dd;text-align:left;padding:8px;    ">Phone</th><th style="border:1px solid #dddd' +
                    'dd;text-align:left;padding:8px;">Company</th></tr><tr style="background-color:#d' +
                    'ddddd;"><td style="border:1px solid #dddddd;text-align:left;padding:8px;">' + document.name + '</td><td style="border:1px solid #dddddd;text-align:left;padding:8px;">' + document.email + '</td><td style="border:1px solid #dddddd;text-align:left;padding:8px;">' + document.phone + '</td><td style="border:1px solid #dddddd;text-align:left;padding:8px;">' + document.company + '</td></tr></table><br /><strong>Message: </strong><p>' + document.message + '</p>'
        };

        return sgMail.send(msg);
    });
