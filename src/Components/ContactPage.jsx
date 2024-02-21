import React from "react";

function ContactPage() {
  return (
    <div>
      <div className="card bg-dark text-white" style={{ height: "700px" }}>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp"
          className="card-img"
          alt="Stony Beach"
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="card-img-overlay mt-60 text-center">
            
            <h5 className="text-xl">collins24@gmail.com</h5>
          <h2 className="card-title text-8xl  ">Get in touch</h2>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
