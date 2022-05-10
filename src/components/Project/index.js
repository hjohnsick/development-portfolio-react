import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";
function Project() {
  const projects = [
    {
      name: "Run-buddy",
      language: "HTML/CSS",
      image: "run-buddy.jpg",
      url: "https://hjohnsick.github.io/run-buddy/",
      git: "https://github.com/hjohnsick/run-buddy",
    },
    {
      name: "Weather Dashboard",
      language: "Javascript/JQuery/HTML/CSS",
      image: "weather-dashboard.PNG",
      url: "https://hjohnsick.github.io/Weather-Dashboard/",
      git: "https://github.com/hjohnsick/Weather-Dashboard",
    },
    {
      name: "What's For Dinner?",
      language: "JavaScript/JQuery/Bulma/HTML/CSS",
      image: "whats-for-dinner.png",
      url: "https://stahljohnmark.github.io/whatsfordinner/",
      git: "https://github.com/stahljohnmark/whatsfordinner",
    },
    {
      name: "The Guest List",
      language: "Node.js/Sequelize/MySQL/Express/JavaScript/Handlebars",
      image: "guest-list.png",
      url: "https://hidden-spire-39352.herokuapp.com/",
      git: "https://github.com/hjohnsick/the-guest-list",
    },
    {
      name: "The Tech Blog",
      language: "Node.js/Express/bcrypt/MySQL2/Sequelize",
      image: "the-tech-blog.PNG",
      url: "https://cryptic-brook-73251.herokuapp.com/",
      git: "https://github.com/hjohnsick/techblog",
    },
    {
      name: "Oh Snap!",
      language: "React/JavaScript",
      image: "oh-snap.PNG",
      url: "https://hjohnsick.github.io/photo-port/",
      git: "https://github.com/hjohnsick/photo-port",
    },
    {
      name: "Park-Add-Venture",
      language: "React/NodeJS/Express",
      image: "park-add-venture.PNG",
      url: "https://parkaddventure.herokuapp.com/",
      git: "https://github.com/8bitgaming/Park-Add-Venture",
    },
  ];

  const renderCard = (card) => {
    return (
      <Card style={{ width: "18rem" }} key={card.name}>
        <a href={card.url} target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            src={require(`../../assets/images/${card.image}`)}
            alt={card.name}
            height="250px"
          />
        </a>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.language}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link
            href={card.git}
            target="_blank"
            rel="noreferrer"
            className="repo-link"
          >
            Git Repo
          </Card.Link>
        </Card.Footer>
      </Card>
    );
  };

  return <div className="card-container">{projects.map(renderCard)}</div>;
}

export default Project;
