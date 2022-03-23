import { Header } from "tar";

const App = () => {
  const course = "Half stack application development";
  const parts = [
    {
    name :"Fundamentals of React",
    exercises : 10
    },
    { 
    name: "Using props to pass data",
    exercises : 7
    },
    {
    name : "State of component",
    exercises : 14
    }
  ]

return(
  <div>
  <><Header course={course} />
  <Content parts={parts}/>
  <Total parts={parts} /></>
  </div>
  )
}  
export default app