import React from 'react';
import Card from "./components/card/card";
import ProjectAccordion from './components/ProjectAccordion/ProjectAccordion';
import StickyNote from './components/StickyNote/StickyNote';
import "./App.css"; 

const App = () => {
    // const data = [
    //     ["Item 1", "Item 2", "Item 3"],
    //     ["Item 4", "Item 5", "Item 6"],
    //     ["Item 7", "Item 8", "Item 9"],
    // ];

    return (
        <div className='App'>
          <div>
            <h1 className="heading">Projects: </h1>
            <ProjectAccordion
            title="Projects management app:"
            description="Desktop application to manage projects and tasks."
            />
            {/* <StickyNote/> */}
          </div>
          
          <Card 
          title="To do " 
          // description="This is the first card." 
          image="./Imgs/card1.png" 
          />
          <Card 
          title="Doing " 
          image="./Imgs/card2.png" 
          />
          <Card 
          title="Done " 
          image="./Imgs/card3.png" 
          />
        </div>
    );
};

export default App;

