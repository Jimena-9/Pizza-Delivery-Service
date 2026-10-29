"use strict";

// Get references to the contact form and its fields
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const contactSuccess = document.getElementById("contact-success");

//Read the contact form, show a thank-you message and clear the inputs
//input: e (the submit event of the form)
//output: none (shows the success message and empties the form)
function sendMessage(e) {
  e.preventDefault(); // Stop the form from reloading the page

  // Read what the user typed (trim removes spaces at the start and end)
  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let message = messageInput.value.trim();

  // "required" doesn't stop fields that only contain spaces, so check again
  // (the message is optional, so it isn't checked)
  if (name === "" || email === "") {
    alert("Please fill in your name and email.");
    return;
  }

  // In a real project, the message would be sent to a server here.
  console.log("Message sent:", { name, email, message });

  // Show the thank-you message
  contactSuccess.textContent = `Thank you, ${name}! We will reply to ${email} as soon as possible.`;
  contactSuccess.hidden = false;

  // Clear all the inputs of the form
  contactForm.reset();
}

contactForm.addEventListener("submit", sendMessage);