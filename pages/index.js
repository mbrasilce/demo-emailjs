import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cq9f2ip', 'template_fdntfyu', e.target, 'user_ySq4Gpz51PluUXjaVAx3o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <p>
                <label htmlFor="from_name">Name</label>
                <input type="text" id="from_name" name="from_name" />
            </p>
            <p>
                <label htmlFor="reply_to">Email</label>
                <input type="email" id="reply_to" name="reply_to" />
            </p>
            <p>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}