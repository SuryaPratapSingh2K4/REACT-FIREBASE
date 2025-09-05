import {Route, Routes } from "react-router-dom"
import DashBoard from "./Pages/DashBoard"
import { BrowserRouter as Router } from "react-router-dom"
import AddStudent from "./Pages/AddStudent"
import StudentList from "./Pages/StudentList"
import NotFound from "./components/NotFound"


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashBoard />}/>
        <Route path='/add-student' element={<AddStudent />}/>
        <Route path='/student-list' element={<StudentList />}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
