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
            Logout
        </StyledButton>
    );
}

const StyledButton = styled.button`
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
    border: none;
    background-color: transparent;
    transition: all 0.3s ease;
    color: black;
    cursor: pointer;
    box-sizing: content-box;

    &:hover {
        background-color: rgba(0, 0, 0, 0.10);
    }
`;

export default LogoutButton;