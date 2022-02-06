import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nicholas Kemper</h2>
        <p><a href="mailto:nick.b.kemper@gmail.com">nick.b.kemper@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, my name is Nicholas Kemper.
        I am an engineer, data scientist, software developer, and research scientist.
        I graduated from the <a href="https://www.uc.edu/">University of Cincinnati</a> with a degree in
        Chemical Engineering and a minor in Business Analytics.
        </p><p>
       I am currently an Associate Scientist at <a href="https://us.pg.com/">Procter and Gamble</a> where I focus
       on data science on our LIMS at a corporate level. I also love starting side projects and learning
        new things.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
