import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Headings from "./Headings";

class Resume extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Grid>
          <Cell className="resume-right-col" col={12}>
            <h2>About</h2>

            <Headings
              heading="PROGRAMMING LANGUAGES, FRAMEWORKS, LIBRARIES"
              value="HTML5, CSS3, JavaScript, Bootstrap, jQuery, Ajax, MySQL, Node.js, Express, React"
            />

            <Headings
              heading="GITHUB PROFILE:"
              value={
                <a
                  href="https://github.com/ltdebelen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ltdebelen
                </a>
              }
            />

            <Headings
              heading="LINKEDIN:"
              value={
                <a
                  href="https://www.linkedin.com/in/lawrence-adrian-de-belen-896ab8155/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/lawrence-adrian-de-belen
                </a>
              }
            />

            <Headings
              heading="RESUME:"
              value={
                <a
                  href="https://drive.google.com/open?id=1Es6r_q3paM6N3z1tXBEOCvaWXzfzfUzm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lawrence Adrian De Belen
                </a>
              }
            />

            <Headings
              heading="CONTACT INFO:"
              value="Email: ltdebelen@gmail.com"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
