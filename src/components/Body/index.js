import React, { Component } from "react";
import dogImgs from "../../dogs.json";
import Dogs from "../Dogs/index.js";

class Body extends Component {
  state = {
    dogImgs,
    score: 0,
    picked: []
  };


  componentDidMount() {
    this.setState({ dogImgs: this.state.dogImgs});
  }

  handleClick = id => {
    
    console.log("picked")
    console.log(this.state.picked)
    console.log("length: " + this.state.picked.length)
    console.log("score")
    console.log(this.state.score)

    let picked = this.state.picked
    let score = this.state.score

    let evaluateClick = function() {
        for (var i = 0; i < picked.length; i++) {
            if (picked[i] === id) {
                console.log("lose")
                return false
            }
        }
        console.log("win")
        picked.push(id)
    }

    // not the first click
    if (this.state.picked.length !== 0) {
        if (evaluateClick() === false) {
            console.log("lose")
            this.setState({
                picked: [],
                score: 0,
                dogImgs: dogImgs.sort(() => Math.random() - 0.5)
              });
            
        }
        else {
            console.log("win")
            const scorePlus = score + 1;
            console.log("scorePlus: " + scorePlus)

            this.setState({
                score: score + 1,
                dogImgs: dogImgs.sort(() => Math.random() - 0.5)
              });
        }
    }
    // first click --> auto-win
    else {
        this.state.picked.push(id)
        this.setState({
            score: score + 1,
            dogImgs: dogImgs.sort(() => Math.random() - 0.5)
          });
    }
  };

  render() {
    console.log(this.state.dogImgs)
    return (
      <div>
          <h1>Score: {this.state.score} </h1>
          {this.state.dogImgs.map(item => (
            <Dogs
              key={item.id}
              id={item.id}
              handleClick={this.handleClick}
              image={item.dog_link}
            />
          ))}
      </div>
    );
  }
}

export default Body;
