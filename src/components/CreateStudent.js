import { useState } from "react";
import Navbar from "./Navbar";
import StudentForm from "./StudentForm";
import Axios from "axios"

function CreateStudent(props) {
    const [obj, setObj] = useState([]);

    const getdetails = (n) => {
        setObj(n)

    }
    const handleClick = () => {
        alert("Creating Record");
        
        Axios.post('http://localhost:4000/student/CreateStudent', { Name: obj[0], Email: obj[1], RollNo: obj[2] })
            .then(res => {
                if (res.status === 200) {
                    alert("successfully created")
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }
    return (
        <div >
            <Navbar></Navbar>
            <form onSubmit={handleClick}>
                <StudentForm getdetails ={getdetails} btn="Create Student"></StudentForm>
            </form>
        </div>
    )
}
export default CreateStudent;