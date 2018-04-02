import { db } from './firebase';

/*****************************************************
 *
 * CONTACT
 *
*****************************************************/
export const sendMessage = (first, last, email, phone, company, message) => db
    .collection("messages")
    .doc(email)
    .collection("emails")
    .doc()
    .set({
        name: first + " " + last,
        email: email,
        phone: phone,
        company: company,
        message: message
    })
    .then(function () {
        console.log("Document successfully written!");
    })
    .catch(function (error) {
        console.error("Error writing document: ", error);
    });