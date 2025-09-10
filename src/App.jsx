import { Route, Routes } from "react-router-dom"
import DashBoard from "./Pages/DashBoard"
import { BrowserRouter as Router } from "react-router-dom"
import AddStudent from "./Pages/AddStudent"
import StudentList from "./Pages/StudentList"
import NotFound from "./components/NotFound"
import DeleteStudent from "./Pages/DeleteStudent"
import EditStudent from "./Pages/EditStudent"
import AddFaculty from "./Pages/AddFaculty"
import FacultList from "./Pages/FacultList"


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path='/student-list' element={<StudentList />} />
        <Route path='/delete-student/:id' element={<DeleteStudent />} />
        <Route path="/add-faculty" element={<AddFaculty />} />
        <Route path="/faculty-list" element={<FacultList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
