import CommunityCard from "../components/CommunityCard";

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
    </div>
  );
}

export default Community;
