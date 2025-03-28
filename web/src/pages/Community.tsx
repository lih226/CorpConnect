import CommunityCard from "../components/CommunityCard";
import MyCommunityCard from "../components/MyCommunityCard";

function Community() {
  return (
    <div>
      <CommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        description="Talk to peers about summer internships such as the interview process, moving, and more! Join a community where you can share your experiences and learn from others." 
        tags={["internship", "college"]} 
        numMember={50} 
        rating={3.5} />
        <MyCommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        message="Here's how to secure an internship in your junior year: Start by researching opportunities early, as many companies begin recruiting months in advance. Polish your resume and LinkedIn profile to highlight relevant coursework, projects, and any work experience. Networking is crucial—attend career fairs, connect with alumni, and reach out to professionals on LinkedIn to increase your chances. Use job portals like LinkedIn, Handshake, and Indeed, setting up alerts to stay updated on new postings. When applying, consider both large corporations and smaller firms where you can gain hands-on experience. Prepare thoroughly for interviews by practicing common questions and researching the company’s background. If certain skills are required, take online courses or work on personal projects to strengthen your expertise. After interviews or networking events, follow up with thank-you emails to leave a strong impression. Most importantly, stay persistent—rejections happen, but with effort and patience, the right opportunity will come."
        username="Edward Chung"
        time={new Date("2023-10-01T12:00:00Z")}
        channel="Internship Advice"
        unread={true}
        mute={false}
        />
        <MyCommunityCard 
        name="Summer Internship" 
        banner="https://pix4free.org/assets/library/2021-01-21/originals/internship.jpg" 
        message="Here's how to secure an internship in your junior year: Start by researching opportunities early, as many companies begin recruiting months in advance. Polish your resume and LinkedIn profile to highlight relevant coursework, projects, and any work experience. Networking is crucial—attend career fairs, connect with alumni, and reach out to professionals on LinkedIn to increase your chances. Use job portals like LinkedIn, Handshake, and Indeed, setting up alerts to stay updated on new postings. When applying, consider both large corporations and smaller firms where you can gain hands-on experience. Prepare thoroughly for interviews by practicing common questions and researching the company’s background. If certain skills are required, take online courses or work on personal projects to strengthen your expertise. After interviews or networking events, follow up with thank-you emails to leave a strong impression. Most importantly, stay persistent—rejections happen, but with effort and patience, the right opportunity will come."
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
