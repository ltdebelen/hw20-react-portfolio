import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/E4Cpieo.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Password Generator</h4>
                  An application that generates a random password based on
                  user-selected criteria.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW3-Password-Generator"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://ltdebelen.github.io/HW3-Password-Generator/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/IkhyhOd.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Code Quiz</h4>
                  An interactive timer-based quiz application that tests user's
                  knowledge on web development topics and concepts.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW4-Code-Quiz"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://ltdebelen.github.io/HW4-Code-Quiz/index.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/FyZCF37.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Day Planner</h4>A simple calendar application that allows
                  the user to save events for each hour of the day.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW5-Day-Planner"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://ltdebelen.github.io/HW5-Day-Planner/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>

          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/EIMnEpO.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Weather Dashboard</h4>A web app utilizing Open Weather API
                  to provide user weather information.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW5-Day-Planner"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://ltdebelen.github.io/HW5-Day-Planner/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}></Cell>
            <Cell col={4}></Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/0qFpF2D.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Note Taker</h4>An application that can be used to write,
                  save, and delete notes. This application will use an express
                  backend and save and retrieve note data from a JSON file
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW11-Express-Note-Taker"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://arcane-everglades-48111.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/4KUAzjv.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Eat Da Burger</h4>A burger logger with MySQL, Node,
                  Express, Handlebars and a homemade ORM. Implemented MVC design
                  pattern.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW13-Eat-Da-Burger"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://whispering-cliffs-74398.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/DWZbeiO.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Workout Tracker</h4>A web application that helps user
                  track their workouts. Used Mongoose for ORM.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW17-Workout-Tracker"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://boiling-plateau-16177.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>

          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/HVGwUxh.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Budget Tracker</h4>A Budget Tracker application that
                  allows user to enter transactions for budgeting purposes. The
                  application works both online and offline mode.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW18-Budget-Tracker"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://evening-atoll-06850.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/DWZbeiO.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Workout Tracker</h4>A web application that helps user
                  track their workouts. Used Mongoose for ORM.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW17-Workout-Tracker"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://boiling-plateau-16177.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/e3kLAdO.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Employee Directory</h4>An employee directory that is made
                  from React. Users should be able to filter and search for
                  employees. Employee data is being pulled from Random User API.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/hw19-user-directory"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                  <Button colored>
                    {" "}
                    <a
                      href="https://arcane-journey-71001.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <Grid>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/fFkObx8.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Github Profile Generator</h4>A command-line application
                  that dynamically generates a PDF profile from a GitHub
                  username. Details are being pulled from GitHub API
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW9-Developer-Profile-Generator"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(https://i.imgur.com/EigAnsa.png) center / cover",
                  }}
                ></CardTitle>
                <CardText>
                  <h4>Team Roster Generator</h4>A Node CLI that takes in
                  information about employees and generates an HTML webpage that
                  displays summaries for each person.
                </CardText>
                <CardActions border>
                  <Button colored>
                    {" "}
                    <a
                      href="https://github.com/ltdebelen/HW10-Template-Engine"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}></Cell>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Front End</Tab>
          <Tab>Front End & Back End</Tab>
          <Tab>CLI</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
