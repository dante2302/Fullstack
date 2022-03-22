import { Header } from "tar";

const App = () => {
  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;

return(
  <div>
  <Header course = {course}/>
  <Content/>
  <Total Number of exercises{...exercises1+exercises2+exercises3} />
  </div>
  )
}  
export default app