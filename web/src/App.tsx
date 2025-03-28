import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './components/TopBar';
import Community from './pages/Community';
import DM from './pages/DM';
import Explore from './pages/Explore';
import Housing from './pages/Housing';
import Profile from './pages/Profile';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <TopBar />
      <Content>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/directmessage" element={<DM />} />
          <Route path="/explore" element={<Explore />} />
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
    margin: 0;
    padding: 0;
  }
`;

// Style so content is positioned correctly with both sidebar and top bar
const Content = styled.div`
  margin-left: 75px;
  margin-top: 60px;
`;

export default App;
