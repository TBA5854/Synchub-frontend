import React, { useState } from "react"
import './Home.css';
import img1 from "/images/img1.svg";
import img2 from "/images/img2.svg";
import img3 from "/images/img3.svg";
import img4 from "/images/img4.svg";

const Home = () => {
    const features = [
      {
        title: "Collaborate",
        description:
          "Want to collaborate on meaningful projects and make the difference",
      },
      {
        title: "Innovate",
        description:
          "Be a part of the growing community to enhance your skills and connections",
      },
      {
        title: "Succeed",
        description:
          "Secure your spot on the leaderboard and get a chance to win rewards",
      },
    ];

    const supportItems = [
        {
          title: 'Comprehensive Student Support',
          description:
            'SyncHub provides dedicated support to students, ensuring they have the resources and assistance needed to thrive in academic and extracurricular pursuits.',
          img: img1,
        },
        {
          title: 'Effective Project Management',
          description: 
            'SyncHub ensures smooth workflows and collaboration, empowering students to work together effectively on various projects and initiative',
          img: img2,
        },
        {
          title: 'Personalized Learning Experience',
          description: 
            "SyncHub's smart tools and resources enable students to tailor their learning journey, making education more personalized and engaging",
          img: img3,
        },
        {
          title: 'Empowering Opportunities',
          description: 
            "Synchub provides you oppurtunities to compete in national and International hackathon remotely with all the essential features to run the hackathon smoothly .",
          img: img4,
        },
    ];

    const [email, setEmail] = useState("");
    const handleSubmit = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
        console.log("Email submitted:", email);
        setEmail("");
        } else {
        console.log("Email failed");
        }
    };
  
    return (
      <div className="home">
        <div className="center-container">
            <h1>A personalised hub for your <span>Innovation</span></h1>
            <button>Get Started</button>
        </div>
        <div className="offerings-container">
          {/* Features Section */}
          <div className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h2 className="feature-title"> {feature.title} </h2>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="support-section">
            {supportItems.map((item, index) => (
                <div className={`support-item ${index % 2 === 0 ? 'row-reverse' : ''}`} key={index}>
                <div className="support-img">
                    <img src={item.img} alt={item.title} />
                </div>
                <div className="support-text">
                    <h4>
                    {item.title.split(' ').slice(0, -1).join(' ') + ' '}
                    <span className="highlight">{item.title.split(' ').slice(-1)}</span>
                    </h4>
                    <p>{item.description}</p>
                </div>
                
                <div className="divider"></div>
                </div>
            ))}
        </div>

        <div className="container">
            <div className="content">
                <div className="headline">
                    Elevate your student experience with SyncHub's cutting-edge solutions designed to maximize productivity and collaboration.
                </div>

                <div className="input-container">
                    <button
                        onClick={handleSubmit}
                        className="submit-button"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="email-input"
                        />
                        Submit
                    </button>
                </div>
                <p className="connect-message">Connect with Us to know more!</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;