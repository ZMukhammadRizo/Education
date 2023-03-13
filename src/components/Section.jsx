import React from "react";
import styled from "styled-components";


const Container = styled("div")`
    display: flex;
    margin: 20px;
    color: black;
    font-size: 20px;
    height: calc(100vh-5rem);
    background-size: 100% 90%;
`;
const P = styled("p")`
    color: grey;
`;
const Input = styled("input")`
  background-color: #8d646b;
  border-radius: 5px;
  border: 1px solid black;
  color: #6b6ba7;
  margin-top: 50px;
`;
const Button = styled("button")`
    background-color: pink;
    border-radius: 5px;
    border: 1px solid black;
    color: blue;
    margin-top: 30px;
    display: flex;
`;

const Image = styled("image")`
    width: 30px;
    height: 30px;
`;

function Section() {
    return (
      <Container>
        <div>
          <h1>
            Learn More
            <br></br>
            Be Wise
          </h1>
          <p>
            Using this website you can register to different educational courses, it helps you to save your time and energy.
          </p>
          <div>
            <input placeholder="Search by your location" />
            <Button>Search for more info</Button>
          </div>
        </div>
        <div>
          <img
            src="https://1.bp.blogspot.com/-4KwyfvSWAhk/XyLLI-byYmI/AAAAAAAABTc/PAfkBPWQ2ZsYC2hcUR_pGs50tQxkuho9ACPcBGAYYCw/w320-h291/importance_of_education.webp"
            alt=""
          />
        </div>
      </Container>
    );
}

export default Section; 


