import styled from "styled-components";

type DMCardProps = {
  name: string;
  profilePic: string;
  lastMessage: string;
  onSelect: () => void;
};

function DMCard({ name, profilePic, lastMessage, onSelect }: DMCardProps) {
  return (
    <CardContainer onClick={onSelect}>
      <ProfileImage src={profilePic} alt={name} />
      <TextContainer>
        <Name>{name}</Name>
        <LastMessage>{lastMessage}</LastMessage>
      </TextContainer>
    </CardContainer>
  );
}

// Styled components for the DMCard

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 229px; /* Fixed width for each DM card */
  background-color: white;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px; /* Adds space between each DMCard */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* Take the remaining space */
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis; /* Adds ellipsis if name is too long */
  white-space: nowrap;
`;

const LastMessage = styled.div`
  font-size: 14px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis; /* Ensures the message doesn't overflow */
  white-space: nowrap;
`;

export default DMCard;
