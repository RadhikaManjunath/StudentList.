import Axios from "axios";

function StudentTableRow(props) {
    const handleDelete = () => {
        // alert(props.details._id);
        Axios.delete('http://localhost:4000/student/delete-student/' + props.details._id)
            .then(res => {
                if (res.status === 200) {
                    alert("deleted");
                    window.location.reload();
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));

    }
    return (
        <tr>
            <td>{props.details.Name}</td>
            <td>{props.details.Email} </td>
            <td>{props.details.RollNo} </td>
            <td>
                <link to={`/updatestudent/${props.details._id}`}><button class="bg-success btn btn-lg .btn-rounded">Edit </button></link>
                <button onClick={handleDelete} class="bg-danger .btn-rounded btn btn-lg ms-5">Delete</button>
            </td>
        </tr>
    )
}

export default StudentTableRow;


