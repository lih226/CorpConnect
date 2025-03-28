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
                <SidebarLink to="/" end>
                    <RxDashboard size={20} />
                    Community
                </SidebarLink>
                <LinkSpacer />
                <SidebarLink to="/directmessage" end>
                    <IoChatbubblesOutline size={20} />
                    DMs
                </SidebarLink>
                <LinkSpacer />
                <SidebarLink to="/explore">
                    <IoPeopleOutline size={20} />
                    Explore
                </SidebarLink>
                <LinkSpacer />
                <SidebarLink to="/housing">
                    <BiBuildingHouse size={20} />
                    Housing
                </SidebarLink>
                <LinkSpacer />
                <LinkSpacer />
                <SidebarLink to="/profile">
                    <CgProfile size={20} />
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
  width: 75px;
  min-width: 75px;
  height: calc(100vh - 60px); /* Subtract top bar height */
  background-color: #f5f5f5;
  position: fixed;
  top: 60px; /* Start below the top bar */
  left: 0;
  transition: left 0.3s ease;
  padding-top: 20px;
  z-index: 900;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75vh;
  width: 35px;
  height: 35px;
  opacity: 0.8;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #5a54e8;

  &:hover {
    background-color: rgba(0, 0, 0, 0.10);
  }

  &.active {
    background-color: #5a54e8;
    color: white;
  }
`;

const LinkSpacer = styled.div`
    height: 8px;
`;

export default Sidebar;
