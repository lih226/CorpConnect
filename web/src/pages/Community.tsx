import CommunityCard from "../components/CommunityCard";
import MyCommunityCard from "../components/MyCommunityCard";

function Community() {
  return (
    <div>
      <CommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        description="Talk to peers about summer internships such as the interview process, moving, and more!" 
        tags={["internship", "college"]} 
        numMember={50} 
        rating={3.5} />
        <MyCommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        message="Here's how to secure an internship in your junior year..."
        username="Edward Chung"
        time={new Date("2023-10-01T12:00:00Z")}
        channel="Internship Advice"
        unread={true}
        mute={false}
        />
        <MyCommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        message="Here's how to secure an internship in your junior year..."
        username="Edward Chung"
        time={new Date("2023-10-01T12:00:00Z")}
        channel="Internship Advice"
        unread={false}
        mute={true}
        />
    </div>
  );
}

export default Community;
