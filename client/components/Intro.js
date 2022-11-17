import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <div className="intro-menu-container">
        <Link className="intro-menu" to="/intro">
          Introduction
        </Link>
        <Link className="intro-menu" to="/intro/employees">
          Employees
        </Link>
        <Link className="intro-menu" to="/intro/guide">
          Pokeball Guide
        </Link>
      </div>
      <div className="intro-title">
        <h2>Introduction</h2>
      </div>
      <hr></hr>
      <div className="about-us-container">
        <div>
          <img
            className="mart-img"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a2f5800-1a89-48ed-9930-8466a8f6884b/d8zcfcq-c357c38a-fa23-4553-af16-3c7a6ef9d858.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhMmY1ODAwLTFhODktNDhlZC05OTMwLTg0NjZhOGY2ODg0YlwvZDh6Y2ZjcS1jMzU3YzM4YS1mYTIzLTQ1NTMtYWYxNi0zYzdhNmVmOWQ4NTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OLYDigPsnw8ak009iiQopwTYb3cLKZ7z81nmyaH9hls"
          />
        </div>
        <div className="about-us-content">
          <h3 className="about-us-title">About Us</h3>
          <div>
            A Pokémon Mart (Japanese: フレンドリィショップ Friendly Shop),
            commonly referred to as the Poké Mart, is a convenience store that
            sells supplies necessary for Pokémon training. All Poké Marts will
            sell standard adventure supplies (such as HP and status condition
            healing items and Poké Balls), but some stores will also sell
            special items that are often unique to the store (such as Net Balls
            in Blackthorn City and Quick Balls in Lavender Town). Much of the
            merchandise sold at Poké Marts is produced by either Silph Co. or
            the Devon Corporation. Poké Marts will also buy many items from
            customers, usually at half their normal sale price.
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h3 className="about-us-title">Locations</h3>
          <div>
            Almost all cities, both major and minor, have Poké Marts, the
            exception being some which have local medicine shops. Notably, the
            town players start at in each main game usually does not have a Poké
            Mart. Poké Marts do not seem to be as ubiquitous in the anime as
            they are in the games.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
