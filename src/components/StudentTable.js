import Axios from "axios";
import StudentTableRow from "./StudentTableRow";
import {useState,useEffect} from "react";

function StudentTable() {
    const [data,setData]=useState([]);


    
    useEffect(()=>{
        Axios.get('http://localhost:4000/student')
            .then(res => {
                if (res.status === 200) {
                    setData(res.data);
                }
                else{
                    Promise.reject();
                }
                })
                .catch((err)=>{alert(err)});
            } )

    const tableData = () => {
        return data.map((v, i) => {
           return <StudentTableRow details={v} />
        })}
        return (
            <div>
                <table className="table table-hover bg-secondary text-light table-bordered mx-auto my-5" style={{ maxWidth: "700px" }}>
                    <tr style={{padding:"50px"}}>
                        <th>Name</th>
                        <th> Email</th>
                        <th> Roll No</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {tableData()}
                    </tbody>
                </table>

            </div>
        )
    }
export default StudentTable;