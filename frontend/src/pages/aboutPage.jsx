import React from 'react';

import './AboutPage.css';



const AboutPage = () => {

  return (

    <div className="about-page-container">

      <section className="about-section">

        <h1 className="section-title">About us</h1>

        <div className="about-content">

          <p className="about-paragraph">

            At NaturaDeluxe, we believe in sustainable fashion as a path to a greener and more

            responsible future. Our mission is to offer high-quality clothing, made with sustainable

            materials and ethical processes that minimize environmental impact.

          </p>

          

          <p className="about-paragraph">

            Since our founding, we have been committed to working with responsible suppliers who

            share our vision of a fairer textile industry. Every garment we offer is designed with

            durability, comfort, and style in mind, ensuring that you can dress consciously without

            compromising quality.

          </p>

          

          <p className="about-paragraph">

            We strive to create a community of conscious consumers who value transparency,

            ethical production, and respect for the planet. Thank you for choosing to be part of the

            change with us.

          </p>

        </div>

      </section>

      

      <section className="vision-section">

        <h2 className="section-title">Vision</h2>

        <div className="vision-content">

          <p className="vision-paragraph">

            To be recognized by 2028 as the leading brand in sustainable fashion in Latin America,

            creating a movement that redefines the standards of the textile industry.

          </p>

        </div>

      </section>

      

      <section className="mission-section">

        <h2 className="section-title">Mission</h2>

        <div className="mission-content">

          <p className="mission-paragraph">

            Transforming the fashion industry by offering sustainable and ethically produced

            clothing that inspires people to dress consciously.

          </p>

        </div>

      </section>

      
      
    </div>

  );

};



export default AboutPage;