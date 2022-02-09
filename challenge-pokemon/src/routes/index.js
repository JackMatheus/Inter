import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import OverViewDashboard from '../pages/OverViewDashboard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Overviewdashboard" element={<OverViewDashboard />} />
    </Routes>
  );
}

export default AppRouter;
