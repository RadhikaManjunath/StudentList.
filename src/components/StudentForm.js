import { useState } from "react";

function StudentForm(props){
    const [Name, setName]=useState("");
    const [Email, setEmail]=useState("");
    const [RollNo, setRollNo]=useState();

    const arr = [Name,Email,RollNo];
    const abc = () =>{
        return (props.getdetails(arr));
    }

    return(
        <div>
                <div class=" text-center" id="c1" >
                    <label for="usr"   style={{paddingTop:"100px"}}>Name:
                        <input type="text" class="form-control w-30 border-primary" id="usr" onChange={(e)=>setName(e.target.value)} defaultValue={props.NameValue} /></label><br />
                    <label for="email">Email:
                        <input type="email" class="form-control border-primary" id="email"  onChange={(e)=>setEmail(e.target.value)} defaultValue={props.EmailValue} /></label><br />
                    <label for="roll">RollNo:
                        <input type="tel" class="form-control border-primary  " id="roll"  onChange={(e)=>setRollNo(e.target.value)} defaultValue={props.RollNoValue} /></label><br />
                    <br />
                    <input type="submit" class="btn bg-success border-primary text-dark w-30" onClick={abc} value={props.btn}  />
                </div>
            </div>
    )

}
export default StudentForm;

