import React , { useRef }  from 'react'
import ContactFormStyle from '../../../styles/ContactForm/ContactForm.module.css'

const ContactForm = () => {

    const Name = useRef('');
    const Email = useRef('');
    const Contact = useRef('');
    const Subject = useRef('');
    const Message = useRef('');

    const send_message =  (url, data) => {
        const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
        'credentials': 'include',
        });
        const data = await response.json();
        return data;    
      }



    const registerUser = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8080/api';
        const data = { 
            Name: Name.current.value,
            Email: Email.current.value,
            Contact: Contact.current.value,
            Subject: Subject.current.value,
            Message: Message.current.value
        }
        send_message(url,data);

    }

    return (
        <div className={ContactFormStyle.container}>
            <form
            action='/login'
            method='POST'
            className={ContactFormStyle.form}
            >
                <h1 className={ContactFormStyle.heading}> 
                    CONTACT
                </h1>

                <input
                    className={ContactFormStyle.input}
                    type="text"
                    ref={Name}
                    placeholder="Enter your name."
                />


                <input
                    className={ContactFormStyle.input}
                    type="text"
                    ref={Email}
                    placeholder="Enter your email." 
                />


                <input
                    className={ContactFormStyle.input}
                    type="text"
                    ref={Contact}
                    placeholder="Enter your contact number."
                />


              
                <input
                    className={ContactFormStyle.input}
                    type="text"
                    ref={Subject}
                    placeholder="Enter subject."
                />


                <textarea
                    className={ContactFormStyle.message}
                    type="text"
                    ref={Message}
                    maxLength="400"
                    placeholder="Enter your message."
                />


                <input
                    className={ContactFormStyle.sendbutton}
                    type="Submit"
                    value="Send"
                    onClick={registerUser}
                    readOnly
                />
                </form>
        </div>
    )
}

export default ContactForm
