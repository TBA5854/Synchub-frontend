import React from "react";
import invite from "../../assets/images/invite.png";
import coding from "../../assets/images/coding.png";
import { StretchHorizontal, Trophy, Users, Video } from "lucide-react";

const cardData = [
  {
    icon: <Video />,
    title: "Live video calls",
  },
  {
    icon: <Trophy />,
    title: "Leaderboard",
  },
  {
    icon: <StretchHorizontal />,
    title: "Code with your teammates",
  },
  {
    icon: <Users />,
    title: "Live AI suggestions",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* hero section  */}
      <main className='md:min-h-screen min-h-[70vh] bg-[url("/images/windows11bgmob.png")] lg:bg-[url("/images/windows11bg.png")] bg-no-repeat bg-top flex flex-col justify-center items-center text-center px-2 pt-24 md:pt-48 md:px-64'>
        <h1 className="text-5xl font-bold md:text-6xl">
          A personalised hub for your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
            Innovation
          </span>
        </h1>
        <button className="bg-[rgb(117,60,234)] text-2xl px-20 py-2 rounded-3xl mt-16">
          Get Started
        </button>
      </main>

      {/* invite section  */}
      <section>
        <img src={invite} alt="invite image" />
      </section>

      {/* features section  */}
      <section className="min-h-screen min-w-full text-center py-32">
        <h2 className="text-3xl md:text-5xl font-semibold">
          FEATURES <span className="text-base">to get started with!</span>
        </h2>
        <div className='min-h-[50vh] min-w-full bg-[url("/images/lightBgmob.png")] md:bg-[url("/images/lightBg.png")] bg-contain bg-no-repeat mt-12 pt-4 md:pt-12'>
          <h3 className="text-2xl md:text-4xl">LIGHT UP YOUR CODE</h3>
          <div className="flex flex-col lg:flex-row justify-center pt-4 md:pt-20">
            
            {/* text area  */}
            <div className="flex flex-col justify-between lg:px-24 ">
              <div className="text-left p-2 md:p-0">
                <h3 className="text-3xl md:text-5xl font-bold w-2/3 md:leading-normal">
                  <span className="text-cyan-400">Personalised</span> coding
                  platform for teams
                </h3>
                <span>
                  SyncHub's smart tools and resources enable students to tailor
                  their learning journey, making education more personalized and
                  engaging.
                </span>
              </div>
              <div className="flex flex-row flex-wrap pt-10">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="flex-grow flex flex-col items-center gap-4 text-center p-8 hover:bg-slate-600 rounded-3xl"
                  >
                    <span>{card.icon}</span>
                    <span>{card.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* coding image  */}
            <div className="min-w-[50vw] flex justify-end">
              <img src={coding} alt="coding image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
