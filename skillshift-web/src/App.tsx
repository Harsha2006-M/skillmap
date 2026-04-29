import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import UploadPage from './pages/UploadPage';
import PlatformPage from './pages/PlatformPage';
import ResultsPage from './pages/ResultsPage';
import SkillsAnalysisPage from './pages/SkillsAnalysisPage';
import GapResultsPage from './pages/GapResultsPage';
import LearningPathPage from './pages/LearningPathPage';
import ProfilePage from './pages/ProfilePage';
import CoursePage from './pages/CoursePage';
import PricingPage from './pages/PricingPage';
import SettingsPage from './pages/SettingsPage';
import HelpCenterPage from './pages/HelpCenterPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/upload" replace />} />
            
            {/* Protected Routes */}
            <Route path="/upload" element={<ProtectedRoute><UploadPage /></ProtectedRoute>} />
            <Route path="/platform" element={<ProtectedRoute><PlatformPage /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
            <Route path="/skills-analysis" element={<ProtectedRoute><SkillsAnalysisPage /></ProtectedRoute>} />
            <Route path="/gap-results" element={<ProtectedRoute><GapResultsPage /></ProtectedRoute>} />
            <Route path="/learning-path" element={<ProtectedRoute><LearningPathPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/course/:skill" element={<ProtectedRoute><CoursePage /></ProtectedRoute>} />
            <Route path="/pricing" element={<ProtectedRoute><PricingPage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path="/help" element={<ProtectedRoute><HelpCenterPage /></ProtectedRoute>} />
          </Routes>
        </Router>
      </ResumeProvider>
    </AuthProvider>
  );
}

export default App;
