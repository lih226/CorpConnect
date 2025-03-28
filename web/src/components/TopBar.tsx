import styled from 'styled-components';

function TopBar() {
  return (
    <TopBarContainer>
      <div style={{ fontSize: '26px', fontWeight: 500 }}>CorpConnect</div>
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default TopBar;