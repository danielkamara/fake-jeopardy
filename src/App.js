import "./App.css";
import { Component } from "react";
import Question from "./components/Question";
import Category from "./components/Category";
import Points from "./components/Points";
import Answer from "./components/Answer";
import Score from "./components/Score";
import Button from "./components/Button";

class App extends Component {
  state = {
    question: null,
    isActive: false,
  };

  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };

  getInfo = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random");
      const data = await response.json();
      console.log(data);

      this.setState({
        question: data[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome To Jeopardy</h1>
        </header>

        <div>
          {this.state.question && <Score question={this.state.question} />}

          <Button />
          <h1 style={{ color: "yellow" }}>Let's Play!</h1>

          <button className="get-question" onClick={this.getInfo}>
            Get Question
          </button>
          {this.state.question && <Category question={this.state.question} />}
          {this.state.question && <Points question={this.state.question} />}

          {this.state.question && <Answer question={this.state.question} />}
        </div>

        <div>
          {this.state.isActive ? (
            <h2>
              {" "}
              {this.state.question && (
                <Question question={this.state.question} />
              )}{" "}
            </h2>
          ) : null}
          <button className="reveal" onClick={this.handleShow}>
            Click to Reveal Question
          </button>
          <button className="hide" onClick={this.handleHide}>
            Click To Hide Question
          </button>
        </div>
      </div>
    );
  }
}
export default App;
