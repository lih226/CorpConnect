import styled from 'styled-components';

type Props = {
    name: string;
    description?: string;
    banner?: string;
    tags?: string[];
    numMember?: number;
    rating?: number;
}

function CommunityCard({ name, banner, description, tags, numMember, rating = 0 }: Props) {
    // Define constant for total stars
    const totalStars = 5;

    const renderStars = () => {
        return [...Array(totalStars)].map((_, index) => {
            const currentRating = index + 1;

            // Calculate how filled this star should be (0-1)
            let fillPercentage = 0;
            if (rating >= currentRating) {
                fillPercentage = 1; // Full star
            } else if (rating > index && rating < currentRating) {
                fillPercentage = rating - index; // Partial star
            }

            return (
                <StarContainer key={index}>
                    <EmptyStar>&#9733;</EmptyStar>
                    {fillPercentage > 0 && (
                        <FilledStar
                            style={{
                                width: `${fillPercentage * 100}%`
                            }}
                        >
                            &#9733;
                        </FilledStar>
                    )}
                </StarContainer>
            );
        });
    };

    return (
        <>
            <CardContainer>
                {banner && <Image src={banner} alt={name} />}
                <TextContainer>
                    <Row>
                        {numMember && <Member>Members: {numMember}</Member>}
                        <RatingContainer>
                            {rating !== undefined && rating <= 5 && rating >= 0 && renderStars()}
                        </RatingContainer>
                    </Row>
                    <Name>{name}</Name>
                    {description && <Description>{description}</Description>}
                    <div style={{ height: 5 }} />
                    {tags && <TagContainer>
                        {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                    </TagContainer>}
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
`;

const Image = styled.img`
    width: 100%;
    height: 175px;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Member = styled.div`
  font-size: 14px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StarContainer = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  margin: 0px 2px;
`;

const EmptyStar = styled.span`
  color: #e4e5e9;
`;

const FilledStar = styled.span`
  color: #ffc107;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
`;

const TextContainer = styled.div`
  padding: 15px 30px;
`;

const Name = styled.div`
  font-size: 24px;
`;

const Description = styled.div`
  font-size: 16px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: left;
`;

const Tag = styled.div`
  font-size: 12px;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 4px;
`;

export default CommunityCard;