import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from '/src/components/ChooseUser';
import AdminSignIn from '/src/components/AdminSignIn';
import StudentSignIn from '/src/components/StudentSignIn';
import TeacherSignIn from '/src/components/TeacherSignIn';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from '../src/pages/Students/Dashboard';
import TeacherDashboard from '../src/pages/Teachers/Dashboard';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/*All the sign-in pages.routes*/}
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        
        {/*All the Dashboard.routes*/}
        <Route  path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />        

      </Routes>
    </Router>
  );
}

export default App;
