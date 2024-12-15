import React from "react";
import "./About.css";
import Moto from "../../assets/Logo/Moto.svg";
import Mission from "../../assets/Logo/Mission.svg";
import Vision from "../../assets/Logo/Vision.svg";
import ujwalImage from "../../assets/images/profUjjawal.jpg";
import piyushImage from "../../assets/images/profPiyush.png";
import divyanshuImage from "../../assets/images/profDivyanshu.png";
import adityaImage from "../../assets/images/coreAditya.png";
import arjunImage from "../../assets/images/coreArjun.png";

const cardData = [
  {
    id: 1,
    title: "Moto",
    content:
      "SyncHubb’s motto, “connect, collaborate, create” reflects its core mission to foster a community where students, innovators, and professionals from diverse fields come together. By facilitating seamless connections, SyncHubb enables users to find teammates, mentors, and career opportunities tailored to their skills.",
    icon: Moto,
  },
  {
    id: 2,
    title: "Mission",
    content:
      "To revolutionize how students and young professionals collaborate, learn, and grow by providing an integrated platform for teamwork, innovation, and real-world projects. SyncHubb aims to give students a platform to channelize their focus on developing their skills through our learn-create approach.",
    icon: Mission,
  },
  {
    id: 3,
    title: "Vision",
    content:
      "To become a leading platform for student innovation, where every idea is nurtured, every team is empowered, and every participant finds the tools and connections to succeed in the digital and professional world. Aiming to build a global community that bridges the gap in education, collaboration, and industry-ready experiences.",
    icon: Vision,
  },
];

const members = [
  {
    id: 1,
    name: "Ujjwal Jha",
    image: ujwalImage,
    alt: "Ujjwal Jha",
  },
  {
    id: 2,
    name: "Piyush Kumar",
    image: piyushImage,
    alt: "Piyush Kumar",
  },
  {
    id: 3,
    name: "Divyanshu Ranjan",
    image: divyanshuImage,
    alt: "Divyanshu Ranjan",
  },
];

const members1 = [
  {
    id: 1,
    name: "Arjun thakur",
    image: arjunImage,
    alt: "Arjun thakur",
  },
  {
    id: 2,
    name: "Aditya varma",
    image: adityaImage,
    alt: "Aditya varma",
  },
];

const About = () => {
  return (
    <div>
      <section>
        <div className="title-container">
          <h1 className="title">What We’re Doing Here</h1>
          <p className="title-description">
            Synchub is an integrated social networking platform that connects
            students, professionals and innovators to collaborate on real world
            project with its user driven approach
          </p>
        </div>
      </section>

      <section>
        <div className="card-container">
          {/* Mapping over card data */}
          {cardData.map((card) => (
            <div key={card.id} className="card">
              {/* SVG Image */}
              <div className="icon">
                <img src={card.icon} alt={`${card.title} Icon`} />
              </div>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="founding-members">
        <h2>Founding Members</h2>
        <div className="members-container">
          {members.map((member) => (
            <div className="member-card" key={member.id}>
              <img
                src={member.image}
                alt={member.alt}
                className="member-image"
              />
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="core-members">
        <h2>Core Members</h2>
        <div className="members-container">
          {members1.map((member) => (
            <div className="member-card" key={member.id}>
              <img
                src={member.image}
                alt={member.alt}
                className="member-image"
              />
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
