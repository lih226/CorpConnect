import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { RxDashboard } from "react-icons/rx";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { BiBuildingHouse } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import LogoutButton from './components/LogoutButton';

function Sidebar() {
    return (
        <>
            <SidebarContainer>
                <div style={{ fontSize: '26px' }}>CorpConnect</div>
                <SidebarLink to="/" end>
                    <RxDashboard size={20} />
                    <IconSpacer />
                    Community
                </SidebarLink>
                <SidebarLink to="/directmessage" end>
                    <IoChatbubblesOutline size={20} />
                    <IconSpacer />
                    Direct Message
                </SidebarLink>
                <LinkSpacer />
                <SidebarLink to="/internship">
                    <IoPeopleOutline size={20} />
                    <IconSpacer />
                    Internship
                </SidebarLink>
                <LinkSpacer />
                <SidebarLink to="/housing">
                    <BiBuildingHouse size={20} />
                    <IconSpacer />
                    Housing
                </SidebarLink>
                <LinkSpacer />
                <LinkSpacer />
                <SidebarLink to="/profile">
                    <CgProfile size={20} />
                    <IconSpacer />
                    Profile
                </SidebarLink>
                <LinkSpacer />
                <LogoutButton />
            </SidebarContainer>
        </>
    );
};

// Styles for the sidebar
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17vw;
  min-width: 150px;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  transition: left 0.3s ease;
  padding-top: 20px;
  z-index: 1000;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 2vh;
  width: 13vw;
  height: 3vh;
  opacity: 0.8;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #5a54e8;

  &:hover {
    background-color:rgba(0, 0, 0, 0.10);
  }

  &.active {
    background-color: #5a54e8;
    color: white;
  }
`;

const IconSpacer = styled.div`
    width: 12px;
`;

const LinkSpacer = styled.div`
    height: 8px;
`;

export default Sidebar;
