import "./Student.css"
function Student(props){
    return(
    <>
    <div  className="container">
    <h1>Hello{props.StudentName}</h1>
    <h3>This is {props.fruit}</h3>
    </div>
    </>
    )
}
export default Student;