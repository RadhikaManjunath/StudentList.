import { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Navbar extends Component {
    render() {
        return (
            <div >

                <nav class="navbar " style={{backgroundImage:"linear-gradient(to left, rgba(114, 40, 9,78), rgb(171, 4, 73))"}}>
                    <link class="navbar-brand text-light fw-bold" to="/CreateStudent">Reactjs</link>
                    <div class="nav">
                        <link class="nav-link text-light fw-bold border-primary" to="/CreateStudent">CreateStudent</link>
                        <link class="nav-link text-light fw-bold" to="/student-list">StudentList</link>
                    </div>
                </nav >
            </div >
        )
    }
}
export default Navbar;


