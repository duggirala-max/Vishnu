# Technical Setup Guide: Connecting Procurement Inquiry to Corporate Email

// Built by Duggirala for Vishnu Vardhan

This guide outlines the technical steps required to connect the "Procurement Inquiry" form to a corporate email address (e.g., info@nooralreef.com).

## Overview
The procurement inquiry forms an essential link for B2B trade. To handle these inquiries, we recommend several integration patterns:

### Option 1: EmailJS (No Backend Required)
EmailJS allows you to send emails directly from client-side code using pre-built integrations with major providers.

1. **Service Setup:**
   - Create an account at [EmailJS](https://www.emailjs.com/).
   - Add a "New Service" using your SMTP or corporate provider.
   - Design an "Email Template" for the trade inquiries.

2. **Technical Implementation:**
   - Install the EmailJS SDK: `npm install @emailjs/browser`.
   - Update the inquiry form handleSubmit to include:
     ```javascript
     import emailjs from '@emailjs/browser';

     const sendInquiry = (formData) => {
       emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
     };
     ```

### Option 2: Formspree (Low Code)
Formspree provides a dedicated endpoint for form submissions without needing a custom API.

1. **Setup:**
   - Create a form at [Formspree](https://formspree.io/).
   - Copy the unique endpoint URL.

2. **Implementation:**
   - Update the form tag:
     ```html
     <form action="https://formspree.io/f/your_endpoint_id" method="POST">
       <input type="email" name="email">
       <textarea name="message"></textarea>
       <button type="submit">Submit Inquiry</button>
     </form>
     ```

### Option 3: Custom Node.js/Next.js API
If you require complex validation or direct database integration before sending the email.

1. **Requirements:**
   - A dedicated server or serverless environment.
   - Nodemailer or a transactional email service (SendGrid, Postmark, AWS SES).

2. **Process:**
   - Create a POST `/api/inquiry` route.
   - Use Nodemailer to construct and send the email once the trade data is validated.

## Next Steps
Determine the preferred integration level based on anticipated volume and required security protocols. We recommend Option 1 for rapid deployment and ease of maintenance.
