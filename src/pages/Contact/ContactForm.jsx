
import { useState } from 'react';

const ContactForm = () => {
    const [sendMsg, setSendMsg] = useState("");
    const formHndler = event => {
        event.preventDefault();
        const form = event.target;
        form.reset();
        setSendMsg("Your Message Send Successfully!");
    }
    return (
        <div>
            <div className="text-green-800">{sendMsg}</div>
            <form onSubmit={formHndler}>
                <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="lg:w-1/2 w-full flex gap-1 flex-col">
                        <label htmlFor="name">Name</label>
                        <input className="border rounded-sm bg-gray-200 p-2 outline-none text-gray-800" type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="lg:w-1/2 w-full flex gap-1 flex-col">
                        <label htmlFor="email">Email</label>
                        <input className="border rounded-sm bg-gray-200 p-2 outline-none text-gray-800" type="email" name="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="flex gap-1 flex-col">
                    <label htmlFor="subject">Subject</label>
                    <input className="border rounded-sm bg-gray-200 p-2 outline-none text-gray-800" type="text" name="subject" placeholder="Your Subject" required />
                </div>
                <div className="flex gap-1 flex-col">
                    <label htmlFor="subject">Message</label>
                    <textarea className="border rounded-sm bg-gray-200 p-2 outline-none text-gray-800" name="message" cols="30" rows="5" placeholder="Your Message" required ></textarea>
                </div>

                <input className="border bg-yellow-800 rounded text-gray-200 font-bold py-2 px-4 mt-2 cursor-pointer  outline-none" type="submit" name="subject" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;