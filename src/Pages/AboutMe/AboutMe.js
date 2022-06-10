import React from 'react';

const AboutMe = () => {
    return (
        <div className='bg-dark text-white border border-2 border-primary rounded-3 m-5 p-5'>
            <h1 className='fw-bold m-3'>About Me</h1>
            <p>I'm a Computer Science and Engineering Graduate. I'm looking for opportunities to work as a Junior Web Developer. Currently, I create various websites by using the following technology and tools.</p>
            <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                <p><span className='fw-bold'>Front-End Technology:</span> React JS, React Router, React-Bootstrap, Bootstrap, Tailwind CSS, DaisyUI, React Hook Form, React Firebase Hooks, React Toastify, REST API, JavaScript (ES6), HTML5, CSS3.</p>
            </div>
            <br />
            <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                <p><span className='fw-bold'>Back-End Technology:</span> Node JS, Express JS, MongoDB, JWT.</p>
            </div>
            <br />
            <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                <p><span className='fw-bold'>Tools and Softwares:</span> VS Code, GitHub, Chrome Dev Tools, Heroku, Firebase, Stripe, Netlify.</p>
            </div>
        </div>
    );
};

export default AboutMe;