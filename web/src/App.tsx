import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Community from './pages/Community';
import DM from './pages/DM';
import Internship from './pages/Internship';
import Housing from './pages/Housing';
import Profile from './pages/Profile';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/directmessage" element={<DM />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Content>
    </Router>
  );
}

// Global Style: Default font is Outfit size 16px
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
`;

// Style so it's ~150px to the left (from Sidebar)
const Content = styled.div`
  margin-left: 17vw;
  padding: 20px;
`;

export default App;
