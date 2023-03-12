import React from 'react';

function About() {
    return (
        <div className='about-container'>
            <section className='about-content'>
                <h2>Hi, my name is Ray.</h2>
                <img src="./assets/yasgood.jpg" width="auto" height="auto" alt="In Cardiff Market" />
                <p>I am from Hong Kong and moved to the UK in 2021. For my work experience, I worked as a Business Analyst and IT Consultant for five years. I am now looking forward to becoming a frontend developer or continuing my career as Business Analyst. If you are interested to discuss further detail, you can check out my CV below!</p>
                <embed src="./assets/ray_cv.pdf" type='pdf' width="auto" height="auto"/>
            </section>
        </div>
    )
}

export default About;