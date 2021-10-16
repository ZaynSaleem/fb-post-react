import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Fbpost from './components/fbpost';

import { useEffect, useState } from "react";


function App() {
  let text = "hellow Fb";
  let name = "Zain ul Abedin"
  let des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  const image = [
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  ];
  
  const [BtnValue, setBtnValue] = useState("")

  console.log(BtnValue);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar title={text}/> */}
      <Fbpost name={name} description={des} images={image} data={setBtnValue} click={BtnValue}/>
    </div>
  );
}

export default App;
