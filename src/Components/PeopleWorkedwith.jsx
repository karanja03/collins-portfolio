






import React from "react";
import { useSpring, animated, config } from "react-spring";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMember = ({ name, role, photo, bio, socialLinks }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.wobbly,
  });

  return (
    <animated.div style={props} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mt-12" >
      <div className=" rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform h-full w-96" >
        <div className="relative overflow-hidden rounded-full ">
          <img src={photo} alt={name} className="w-full h-96 object-cover rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 text-white text-center p-2 rounded-full">
              {role}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-white text-lg">{bio}</p>
          <div className="mt-4 flex justify-center space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const PeopleWorkedWith = () => {
    const teamData = [
        {
          name: "John Doe",
          role: "Founder",
          photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
          bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          socialLinks: [
            { icon: <FaTwitter />, url: "https://twitter.com/johndoe" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/johndoe" },
            { icon: <FaGithub />, url: "https://github.com/johndoe" },
          ],
        },
        {
          name: "Jane Smith",
          role: "Lead Developer",
          photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
          bio:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          socialLinks: [
            { icon: <FaTwitter />, url: "https://twitter.com/janesmith" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/janesmith" },
            { icon: <FaGithub />, url: "https://github.com/janesmith" },
          ],
        },
        {
            name: "John Doe",
            role: "Founder",
            photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
            bio:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            socialLinks: [
              { icon: <FaTwitter />, url: "https://twitter.com/johndoe" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/johndoe" },
              { icon: <FaGithub />, url: "https://github.com/johndoe" },
            ],
          },
          {
            name: "Jane Smith",
            role: "Lead Developer",
            photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
            bio:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            socialLinks: [
              { icon: <FaTwitter />, url: "https://twitter.com/janesmith" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/janesmith" },
              { icon: <FaGithub />, url: "https://github.com/janesmith" },
            ],
          },
          {
            name: "John Doe",
            role: "Founder",
            photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
            bio:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            socialLinks: [
              { icon: <FaTwitter />, url: "https://twitter.com/johndoe" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/johndoe" },
              { icon: <FaGithub />, url: "https://github.com/johndoe" },
            ],
          },
          {
            name: "Jane Smith",
            role: "Lead Developer",
            photo: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300", // Replace with actual image URL
            bio:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            socialLinks: [
              { icon: <FaTwitter />, url: "https://twitter.com/janesmith" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/janesmith" },
              { icon: <FaGithub />, url: "https://github.com/janesmith" },
            ],
          },
      ];
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center py-44 "  style={{ backgroundColor: '#212529' }} >
      <h2 className="mt-10 animated-underline text-5xl mb-4 text-white pb-4" >PEOPLE WE'VE WORKED WITH</h2>
      <Slider {...sliderSettings}>
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </Slider>
    </div>
  );
};

export default PeopleWorkedWith;




