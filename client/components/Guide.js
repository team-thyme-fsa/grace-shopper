import React from 'react';

const Guide = () => {
  return (
    <div className="guide-container">
      <div className="guide-title">
        <h2>Pokeball Guide</h2>
      </div>
      <div>
        <div className="guide-image-container">
          <img
            width="400px"
            className="guide-img"
            src="https://archives.bulbagarden.net/media/upload/2/23/Pok%C3%A9_Balls_GL.png"
          ></img>
          <img
            className="guide-img"
            src="https://visonicdome.com/wp-content/uploads/2021/06/visonic-dome-pokeball-sketch.png"
          />
        </div>
        <h3>Description</h3>
        <div className="description">
          A Poké Ball (Japanese: モンスターボール Monster Ball) is a type of
          item that is critical to a Trainer's quest, used for catching and
          storing Pokémon. Both a general term used to describe the various
          kinds as well as a specific term to refer to the most basic among
          these variations, Poké Balls are ubiquitous in the modern Pokémon
          world. Up to six Pokémon can be carried with a Trainer in Poké Balls,
          while more Poké Balls can be held in the Bag for later use. These six
          Pokémon in the Poké Balls can be attached to the user's belt for
          carrying them around. Some Pokémon do not like to be carried around in
          Poké Balls, such as Ash's Pikachu.
        </div>

        <div className="caution">
          <h1>!!Caution!!</h1>
          <p>
            Make sure you don't throw the pokeball too hard, it'll hurt a lil
            fella
          </p>
          <img
            width="500px"
            src="https://cdn.donmai.us/original/e1/61/e161df25ccb6971176509199a26a38c0.jpg"
          />
        </div>
      </div>

      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/unbRf6qUYWo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Guide;
