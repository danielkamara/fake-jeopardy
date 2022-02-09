import "./App.css";
import { Component } from "react";
import Question from "./components/Question";
import Category from "./components/Category";
import Points from "./components/Points";
import Answer from "./components/Answer";

class App extends Component {
  state = {
    question: null,
    answer: "",
  };

  getInfo = async () => {
    try {
      const response = await fetch("http://jservice.io/api/random");
      const data = await response.json();
      console.log(data);
      this.setState({
        question: data[0],
        // answer: data[]
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
          <Points />
        </header>
        <Category />
        {this.state.question && <Question question={this.state.question} />}

        <button onClick={this.getInfo}>Get Question</button>

        <Answer />
      </div>
    );
  }
}

export default App;
