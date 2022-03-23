import { Header } from "tar";

const App = () => {
  const course = {
    name : "Half stack application development",
    parts : [
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
}
return(
  <div>
  <><Header course={course} />
  <Content parts={course.parts}/>
  <Total parts={course.parts.exercises} /></>
  </div>
  )
}  
export default app