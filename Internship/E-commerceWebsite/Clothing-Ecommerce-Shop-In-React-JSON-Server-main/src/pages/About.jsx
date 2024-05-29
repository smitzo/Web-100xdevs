// import React from "react";
// import { SectionTitle } from "../components";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <div>
//       <SectionTitle title="About Us" path="Home | About" />
//       <div className="about-content text-center max-w-2xl mx-auto mt-5">
//       <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
//       <pre className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">

//       Welcome to Smit Clothing and Shoes, your go-to destination for stylish and affordable fashion. <br></br>
//       We offer a diverse range of clothing, footwear, and accessories for men, women, and children. 

// <h1><u>Our Mission</u>:</h1> <br></br>
//         We aim to provide trendy, comfortable, and durable products that cater to all your fashion needs. <br></br>
//         Quality and customer satisfaction are at the core of everything we do.<br></br>

//         Our Commitment
//         We are dedicated to sustainability and ethical practices, 
//         ensuring our materials are eco-friendly and our production is fair.

//         Join our community by following us on social media and subscribing to our newsletter for the latest updates and exclusive offers.

//         Thank you for choosing Smit Clothing and Shoes. We are excited to be a part of your style journey.

//         Sincerely,

//         The Smit Clothing and Shoes Team
        
//       </pre>
//       <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-10 p-5 bg-gray shadow-2xl rounded-lg">
        <h2 className="text-4xl mb-6 text-primary font-bold">We Love Our Customers!</h2>
        <p className="text-lg mb-4 text-white-700">
          Welcome to Smit Clothing and Shoes, your go-to destination for stylish and affordable fashion. We offer a diverse range of clothing, footwear, and accessories for men, women, and children.
        </p>
        <div className="text-left text-white-700 space-y-4">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p>
            We aim to provide trendy, comfortable, and durable products that cater to all your fashion needs. Quality and customer satisfaction are at the core of everything we do.
          </p>
          <h3 className="text-2xl font-semibold">Our Commitment</h3>
          <p>
            We are dedicated to sustainability and ethical practices, ensuring our materials are eco-friendly and our production is fair.
          </p>
        </div>
        <p className="text-lg mt-6 text-white-700">
          Join our community by following us on social media and subscribing to our newsletter for the latest updates and exclusive offers.
        </p>
        <p className="text-lg mt-4 text-white-700 font-semibold">
          Thank you for choosing Smit Clothing and Shoes.<br></br>
           We are excited to be a part of your style journey.
        </p>
        <p className="text-lg mt-4 text-white-700 font-semibold">
          Sincerely,<br />
          The Smit Clothing and Shoes Team
        </p>
        <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-6">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
