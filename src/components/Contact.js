import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Lawrence De Belen</h2>
            <img
              src="./images/universal.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
              }}
            >
              Software Developer with experience in creating websites and web
              applications flexible to client needs.
            </p>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
              }}
            >
              Graduated Cum Laude with a Bachelor’s Degree in Information
              Technology and recently earned a certificate for Full Stack Web
              Development at the University of Kansas Edwards campus.
            </p>
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                lineHeight: "2em",
              }}
            >
              Proficient in web technologies including HTML, CSS, JavaScript and
              the MERN stack. Strong problem solving skills and experience in
              working on a fast paced environment.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (913) 401-5025
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    ltdebelen@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
