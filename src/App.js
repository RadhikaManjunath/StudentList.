import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="StudentList.">
      <Routes>
        <Route path="/" element={<CreateStudent/>}/>
        <Route path="/student-list" element={<StudentList/>}/>
        <Route path="/CreateStudent" element ={<CreateStudent/>}/>
        <Route path="/updatestudent/:id"  element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;