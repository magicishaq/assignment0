// import React from 'react'
// import ReactDOM from 'react-dom'
// //parameter are deconstrcted
// const Hello = ({age,name}) => {
//   //destructoring , values of an object
//   /**
//    * props = {
//    * age: , 
//    * name: }
//    */
  
//   //function that gueses the year of birth
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         this must mean you are born in {bornYear()}; 
//       </p>
//       </div> 
//   )
// }

// const App = () => {
// const name = 'Peter Parker'; 
// const age = 30; 

//   return (
// <div>
//   <h1> Greetings </h1>
//   <Hello name="Ishaq" age ={26 + 10} />
//   <Hello name={name} age={age} />
// </div>
//   )
// }

//Page rerendering

// const App = (props) => {
//   const {counter} = props;  
//   const counterBy2 = () => counter*2; 
//   return(
//     <div> {counter} and {counterBy2()} </div>
//   )
// }

// let counter = 1  
// //Getting the component to rerender 
// const refresh = () => {
//   ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))
// }; 



//using a setInterval timer
// setInterval( () =>{
//   refresh()
//   counter++
// }, 1500); 
//not best way to render components


/**
 * Stateful components
 * 
 */

 //State hooks


// import React, {useState} from 'react' //useState is a function that is imported
// import ReactDOM from 'react-dom'

// const App = () => {
//   const [counter, setCounter] = useState(0); //adds state to the component the inital value is 0 
//   //we assing variables to the useState function called counter and setCounter
//   //counter is the value initally set to 0, with setCounter is a function used to modify the state


//   setTimeout(() => {
//     setCounter(counter+1)
//   },1000)

//   return (
//     <div>{counter}</div>
//   )
// }

//ReactDOM.render(<App/>, document.getElementById('root'))

/**
 * Event Handeling 
 */
// import React, {useState}from 'react'
// import ReactDOM from 'react-dom'

//  /**
//   * Passing state to child components
//   * 
//   */

// //  const Display = (props) =>{
// //   return (
// //     <div>{props.counter} {props.name}
// //     </div>
    
// //   )
// // }
// // const Button = (props) => {
// //   return (
// //     <button onClick={props.handleClick}>
// //       {props.text}
// //     </button>
// //   )
// // }
// //  const App = () => {
// //    const message = 'clicked on the button'
// //    const[counter, setCounter] = useState(2); 
// //     const handleClick = () => {
// //       alert(message)
// //     }
// // //the button onlcik attributte references the handleClick function
// // //the function can be written striaght inside the html JSX
// // //separating the functions into handlers
// // //calling a function that changes state causes the component to rerender
// // const increaseByOne = () => setCounter(counter + 1 ); 
// // const setToZero = () => setCounter(0); 
// // const decreaseByONe = () => setCounter(counter - 1); 
// //     return (
// //       <div>
// //         <Display counter={counter} name={message}>
// //         </Display>

// //         <Button handleClick={increaseByOne} text={"increase by One"} >         
// //         </Button>
// //         <Button handleClick={setToZero} text={'set to zero'}>
// //         </Button>
// //         <Button handleClick={decreaseByONe} text={'minus'}>

// //         </Button>
// //         {/* <button onClick={handleClick}>
// //           Plus
// //         </button>
// //         <button onClick={() => setCounter(counter + 1 )}>
// //           zero

// //         </button> */}
// //         </div> 
// //     )
// //  }


// //Refactoring components
// //destructoring the parameters
// //returns on one line
// const Display = ({counter, name}) => <div>{counter}{name}</div>
  
// const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

//  const App = () => {
//    const message = 'clicked on the button'
//    const[counter, setCounter] = useState(2); 
//     const handleClick = () => {
//       alert(message)
//     }
// //the button onlcik attributte references the handleClick function
// //the function can be written striaght inside the html JSX
// //separating the functions into handlers
// //calling a function that changes state causes the component to rerender
// const increaseByOne = () => setCounter(counter + 1 ); 
// const setToZero = () => setCounter(0); 
// const decreaseByONe = () => setCounter(counter - 1); 
//     return (
//       <div>
//         <Display counter={counter} name={message}>
//         </Display>

//         <Button handleClick={increaseByOne} text={"increase by One"} >         
//         </Button>
//         <Button handleClick={setToZero} text={'set to zero'}>
//         </Button>
//         <Button handleClick={decreaseByONe} text={'minus'}>

//         </Button>
//         {/* <button onClick={handleClick}>
//           Plus
//         </button>
//         <button onClick={() => setCounter(counter + 1 )}>
//           zero

//         </button> */}
//         </div> 
//     )
//  }


//  ReactDOM.render(<App/>, document.getElementById('root')); 


//1d a more complex state
//debugging react apps
import React,{useState} from 'react'; 
import ReactDOM from 'react-dom'; 


const App = () => 
{
  //setting two states in one object
  const [clicks, setClicks] = useState({
    left: 0, 
    right: 0,
    allClicks: []
  });


  //handles the clicking history
  
  const History = (props)=> {
    const message = 'app is used by clicking buttons'
if(props.allClicks.length === 0){
  return (
    <div>
      {message}
    </div>
  )
}
    return(
      <div>
        button press history: {props.allClicks.join('')}
        </div>
    )
  }

  //component that handles the button

  const Button = ({onClick, text}) => {
    return(
      <div>
        <button onClick={onClick}>
          {text}
        </button>
      </div>
    )
  }

  //chanages the value of the left click but updating left and leaving right as is
  //using the spread syntax
  ///..clicks creates  new object that copies all the properties of the click object. by specifing the new property in newClicks, 
  //changes the property
  //it is forbidden to mutate state directly (clicks.right ++ ) has to be done by setting state to a new object

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks, 
      left: clicks.left  + 1,
      allClicks: clicks.allClicks.concat('L')
    
    }
    setClicks(newClicks); 
  }
  const handleRightClick = () => {
    const newClicks = {
      ...clicks, 
      right: clicks.right + 1, 
      allClicks: clicks.allClicks.concat('R')

    }
    setClicks(newClicks); 
  }

  return(
    <div>
      <div>
       {clicks.left}
       <Button onClick={handleLeftClick} text="left button" />
       {clicks.right}
       <Button onClick={handleRightClick} text="right button" /> 
      </div>
      <History allClicks={clicks.allClicks} /> 
      </div> 
  )
}

ReactDOM.render(<App/>,document.getElementById('root')); 