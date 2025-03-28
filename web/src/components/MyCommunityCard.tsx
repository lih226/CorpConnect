import styled from 'styled-components';
import { formatDateByRecency } from '../utils/dateFormat';
import { IoNotificationsOff } from "react-icons/io5";

type Props = {
    name: string;
    banner?: string;
    message?: string;
    username?: string;
    time?: Date;
    channel?: string;
    unread?: boolean;
    mute?: boolean;
}

function MyCommunityCard({ name, banner, message, username, time, channel, unread, mute }: Props) {
    
    // Format the time if it exists
    const formattedTime = time ? formatDateByRecency(time) : null;

    return (
        <>
            <CardContainer>
                <BannerContainer muted={!!mute}>
                    {banner && <Image src={banner} alt={name} muted={!!mute} />}
                    {unread && <Unread />}
                </BannerContainer>
                <TextContainer isUnread={!!unread} muted={!!mute}>
                    <Name>{name}</Name>
                    
                    {/* Row for channel and time */}
                    <ChannelTimeRow>
                        {channel && <ChannelText>#{channel}</ChannelText>}
                        {formattedTime && <TimeText>{formattedTime}</TimeText>}
                    </ChannelTimeRow>
                    
                    {username && message && <Message><Username>{username}:</Username> {message}</Message>}
                    {mute && <IoNotificationsOff style={{ position: 'absolute', top: 15, right: 15, color: 'gray' }} size={20} />}
                </TextContainer>
            </CardContainer>
        </>
    );
}

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 350px;
  background-color: white;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: relative;
`;

const BannerContainer = styled.div<{ muted?: boolean }>`
  position: relative;
  width: 100%;
  opacity: ${props => props.muted ? 0.6 : 1};
`;

const Image = styled.img<{ muted?: boolean }>`
    width: 100%;
    height: 175px;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
`;

const TextContainer = styled.div<{ isUnread: boolean; muted?: boolean }>`
  padding: 15px 30px;
  position: relative;
  font-weight: ${props => props.isUnread ? '400' : '300'};
  opacity: ${props => props.muted ? 0.6 : 1};
`;

const Name = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

// New row component to hold channel and time side by side
const ChannelTimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ChannelText = styled.div`
  font-size: 14px;
`;

const TimeText = styled.div`
  font-size: 14px;
  color: gray;
  text-align: right;
`;

const Username = styled.span`
  font-weight: 400;
`;

const Message = styled.div`
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Unread = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  z-index: 2;
`;

export default MyCommunityCard;