import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Exam from './pages/Exam';
import Review from './pages/Review';
import Result from './pages/Result';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes (Mocked as simple routes for now) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/review" element={<Review />} />
        <Route path="/result" element={<Result />} />
        <Route path="/results" element={<Results />} />

        {/* Fallback */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
