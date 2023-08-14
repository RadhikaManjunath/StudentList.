import StudentForm from "./StudentForm";
import Navbar from './Navbar';
import { useEffect, useState } from "react";
import Axios from 'axios';
import { useParams } from "react-router-dom";

function Edit(props) {
    
    const [formValues,setFormValues] = useState({Name:'', Email:'', RollNo:''});
    const [formDetails, setFormDetails] = useState([]);

    const getdetails = (n)=>{
        setFormDetails(n)    
        // console.log(formDetails);
    }

    const {id} = useParams(); 
    // console.log(id);

    const handleUpdate = ()=>{
        Axios.put("http://localhost:4000/student/updatestudent/:"+ id, {Name:formDetails[0],Email:formDetails[1],RollNo:formDetails[2]})
        .then((res)=>{
            if (res.status === 200){
                alert("Updated");
                window.location.assign("http://localhost:3000/student-list");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    };


    useEffect(()=>{
        Axios.get('http://localhost:4000/student/updateStudent/'+ id)
        .then(res=>{
                const {Name,Email,RollNo} = res.data;
                setFormValues({Name,Email,RollNo});
        })
        .catch((err)=>{alert(err)});
    }, [id]);
    
    return (
        <div>
            <Navbar />
            <form onSubmit={handleUpdate}>
            <StudentForm btn="Update" getdetails={getdetails} NameValue={formValues.Name} EmailValue={formValues.Email} RollNoValue={formValues.RollNo}/>
            </form>
        </div>
    );
}
export default Edit;