import "./App.css";
import { Component } from "react";
import Question from "./components/Question";
import Category from "./components/Category";
import Points from "./components/Points";
import Answer from "./components/Answer";

class App extends Component {
  state = {
    question: null,
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
          <h1>Welcome To Fake Jeopardy</h1>
        </header>

        <div>
          {this.state.question && <Question question={this.state.question} />}
          {this.state.question && <Category question={this.state.question} />}
          {this.state.question && <Points question={this.state.question} />}
          {this.state.question && <Answer question={this.state.question} />}
        </div>

        <button onClick={this.getInfo}>Get Question</button>
        <button onClick={this.getInfo}>Get Question</button>
      </div>
    );
  }
}

export default App;
