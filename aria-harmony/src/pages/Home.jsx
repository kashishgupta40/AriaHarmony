import React from 'react';

function Home() {
  return (
    <div className="font-montserrat">
      {/* Main Section */}
      <div
        id="main"
        className="bg-[url('images/aria_harmony_design1_cropped.jpeg')] bg-no-repeat bg-right bg-[#d2c3c399] w-full h-[900px] mb-0"
      >
        <div id="maintext" className="mt-20 ml-24 pt-60">
          <h1 className="text-7xl font-bold">Experience</h1>
          <h1 className="text-7xl font-bold">The future of music</h1>
          <p id="tagline" className="mt-2 text-2xl font-medium">
            Chat and Sing with Your AI R & B Artist!
          </p>
          <button
            id="chat-button"
            className="bg-red-600 border-spacing-2 border-2 border-black  h-12 w-50 rounded-lg text-2xl font-normal text-white mt-12 ml-24"
          >
            Chat Now
          </button>
          <p id="taglink" className="font-light ml-20 mt-5 text-lg">
            Explore the Discography now <span className="text-xl ml-1">&#x2192;</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="bg-[url('images/aria_harmony_design2_cropped_rounededges.png')] bg-no-repeat bg-inherit bg-[#D2C3C9] w-full h-[1000px]"
      >
        <img
          src="\images\music_player_template.png"
          alt="musicplayer"
          className="ml-[300px] mt-[100px]"
        />
        <div id="abouttext" className="float-right mt-[220px] mr-[80px]">
          <h1 className="text-7xl font-bold">Guess Who?</h1>
          <p className="text-lg font-light mb-5">
            I’m your AI R & B Artist: here to sing your favorite tunes and chat with you anytime!
          </p>
          <div id="stats" className="mt-12 ml-5">
            <h2 className="text-4xl">120+</h2>
            <p className="text-lg">songs in the gallery</p>
            <h2 className="text-4xl">3000+</h2>
            <p className="text-lg">lyrics tuned on demand</p>
            <h2 className="text-4xl">25000+</h2>
            <p className="text-lg">conversations with fans</p>
          </div>
        </div>
      </div>

      {/* Program Section */}
      <div id="program" className="bg-[#E5D5DB] w-full h-[1000px]">
        <div id="playback-icons" className="flex">
          <img src="/images/Vector.png" alt="" className="mr-[100px] mt-[50px]" />
          <img src="/images/mage_next-fill.png" alt="" className="mt-[50px]" />
          <h2 className="text-6xl font-bold mt-[120px]">Explore the AI singing Experience</h2>
        </div>
        <div className="cards-container flex mt-[120px]">
          <div className="program-card h-[500px] w-[450px] mx-[35px] bg-[#EFEAEA] rounded-[20px]">
            <h3 className="program-title ml-[30px] mt-[150px] text-2xl">Listen to Aria Harmony® AI</h3>
            <p className="program-description ml-[30px] mt-[30px] text-xl mr-[50px]">
              Enjoy a variety of songs performed by our AI singer, featuring an array of genres and styles.
            </p>
            <span className="try-now float-right mr-[50px] mt-[100px] text-2xl font-medium">Try now -&gt;</span>
          </div>
          <div className="program-card h-[500px] w-[450px] mx-[35px] bg-[#EFEAEA] rounded-[20px]">
            <h3 className="program-title ml-[30px] mt-[150px] text-2xl">Chat with Aria Harmony® AI</h3>
            <p className="program-description ml-[30px] mt-[30px] text-xl mr-[50px]">
              Engage in a fun and interactive chat session with our AI singer, ask questions, and get instant responses.
            </p>
            <span className="try-now float-right mr-[50px] mt-[100px] text-2xl font-medium">Try now -&gt;</span>
          </div>
          <div className="program-card h-[500px] w-[450px] mx-[35px] bg-[#EFEAEA] rounded-[20px]">
            <h3 className="program-title ml-[30px] mt-[150px] text-2xl">Provide Lyrics for singing</h3>
            <p className="program-description ml-[30px] mt-[30px] text-xl mr-[50px]">
              Share your own lyrics and hear them come to life as our AI singer performs your creation.
            </p>
            <span className="try-now float-right mr-[50px] mt-[100px] text-2xl font-medium">Try now -&gt;</span>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-[#2C1913] w-full h-[900px]">
        <h2 id="pricing-head" className="text-[#D2C3C9] text-5xl font-bold ml-[50px] mt-[0px] pt-[80px] mb-[166px]">Choose the best plan designed for you</h2>
        <div className="cards-container flex mt-[50px]">
          <div className="pricing-card bg-[#EFEAEA] mx-[100px] h-[550px] w-[320px] rounded-[20px]">
            <h3 className="pricing-title pl-[30px] pt-[60px] text-xl font-semibold text-[#3E251C]">Basic</h3>
            <span className="perk flex items-center mb-[5px] mt-[30px] pl-[30px]">Access to</span>
          </div>
          <div className="pricing-card bg-[#EFEAEA] mx-[100px] h-[550px] w-[320px] rounded-[20px]">
            <h3 className="pricing-title pl-[30px] pt-[60px] text-xl font-semibold text-[#3E251C]">Standard</h3>
            <span className="perk flex items-center mb-[5px] mt-[30px] pl-[30px]">Access to</span>
          </div>
          <div className="pricing-card bg-[#EFEAEA] mx-[100px] h-[550px] w-[320px] rounded-[20px]">
            <h3 className="pricing-title pl-[30px] pt-[60px] text-xl font-semibold text-[#3E251C]">Premium</h3>
            <span className="perk flex items-center mb-[5px] mt-[30px] pl-[30px]">Access to</span>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;