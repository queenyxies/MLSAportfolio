/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer_code.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Purrfect Code",
    description:
      "An educational pixel (top-down) RPG game about Java programming made through Unity.",
    url: "https://drive.google.com/file/d/1-r_9tqWarWsGtOzBut9ye_WeBbu545he/view?usp=sharing",
  },
  {
    title: "Payroll System with Database",
    description:
      "A simple payroll system utilizing Java and MySQL for database",
    url: "https://github.com/queenyxies/Payroll-System-with-Database",
  },
  {
    title: "SOAR: A Seat-Occupancy and Reservation System Using RFID Technology and 3D Visualization for Bulacan State University E-Library",
    description:
      "Web app that utilizes PHP, JavaScript, CSS, HTML, Bootstrap, and Three.js.",
    url: "https://drive.google.com/file/d/1TkrZPJdiXPotWgRE_oqgL7BOUOn5hBGE/view",
  },
  {
    title: "CommuniTask",
    description:
      "A mobile application that provides microjob opportunities for the local community in Malolos. It utilizes Typescript, ReactJS, and React Native",
    url: "https://drive.google.com/file/d/1oMZZIsxy14936hbQImF67O11xsTv5srC/view?usp=sharing",
  },
  {
    title: "Weather Web App",
    description:
      "A React weather app for real-time updates on temperature, humidity, and wind speed using OpenWeatherMap API.",
    url: "https://github.com/queenyxies/react-Weather-WebApp",
  },
  {
    title: "Simple PingPong Game",
    description:
      "A simple ping pong game project made through Unity",
    url: "https://github.com/queenyxies/SimplePingPong",
  },
  {
    title: "Pokedex",
    description:
      "A Pokedex mobile application utilizing Java and Pokemon API",
    url: "https://github.com/queenyxies/Pokedex",
  },
  {
    title: "Harry Potter App",
    description:
      "A mobile application utilizing Java and Harry Potter API",
    url: "https://drive.google.com/file/d/1L8zK5Box4mhD2OsEIX6LZw3x1hk-2WP7/view?usp=sharing",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
