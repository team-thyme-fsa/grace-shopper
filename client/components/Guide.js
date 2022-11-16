import React from 'react';

const Guide = () => {
  return (
    <div className="guide-container">
      <div className="guide-title">
        <h2>Pokeball Guide</h2>
      </div>
      <div>
        <div className="guide-content">
          <img
            width="500px"
            className="guide-img"
            src="https://archives.bulbagarden.net/media/upload/2/23/Pok%C3%A9_Balls_GL.png"
          ></img>
          <div>
            <img
              className="guide-img"
              src="https://visonicdome.com/wp-content/uploads/2021/06/visonic-dome-pokeball-sketch.png"
            />
          </div>
          <div>
            <h3>Description</h3>
            <p>
              A Poké Ball (Japanese: モンスターボール Monster Ball) is a type of
              item that is critical to a Trainer's quest, used for catching and
              storing Pokémon. Both a general term used to describe the various
              kinds as well as a specific term to refer to the most basic among
              these variations, Poké Balls are ubiquitous in the modern Pokémon
              world. Up to six Pokémon can be carried with a Trainer in Poké
              Balls, while more Poké Balls can be held in the Bag for later use.
              These six Pokémon in the Poké Balls can be attached to the user's
              belt for carrying them around. Some Pokémon do not like to be
              carried around in Poké Balls, such as Ash's Pikachu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
