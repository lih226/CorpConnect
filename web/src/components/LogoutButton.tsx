import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoLogOutOutline } from "react-icons/io5";

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Navigate to home page after logout
            navigate('/');
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };

    return (
        <StyledButton onClick={handleLogout}>
            <IoLogOutOutline size={20} />
            <IconSpacer />
            Logout
        </StyledButton>
    );
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 2vh;
    width: 13vw;
    height: 5vh;
    opacity: 0.8;
    text-decoration: none;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: transparent;
    color: inherit;
    border: none;
    font-weight: 300;
    margin: 0;
    cursor: pointer;
    text-align: left;

    &:hover {
        background-color: rgba(0, 0, 0, 0.10);
    }
`;

const IconSpacer = styled.div`
    width: 12px;
`;

export default LogoutButton;