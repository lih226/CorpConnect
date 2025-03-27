import React, { useState } from "react";

const posts = [
  {
    id: 1,
    username: "user1",
    image: "https://via.placeholder.com/400",
    caption: "Enjoying the sunset!",
  },
  {
    id: 2,
    username: "user2",
    image: "https://via.placeholder.com/400",
    caption: "Delicious food!",
  },
  {
    id: 3,
    username: "user3",
    image: "https://via.placeholder.com/400",
    caption: "Great workout today!",
  },
  {
    id: 4,
    username: "user4",
    image: "https://via.placeholder.com/400",
    caption: "Enjoying the sunset!",
  },
  {
    id: 5,
    username: "user5",
    image: "https://via.placeholder.com/400",
    caption: "Delicious food!",
  },
  {
    id: 6,
    username: "user6",
    image: "https://via.placeholder.com/400",
    caption: "Great workout today!",
  },
];

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Following");

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "90%",
          margin: "10px auto",
          display: "block",
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          backgroundColor: "#f0f0f0",
          outline: "none",
        }}
      />
      
      {/* Header with Tab System */}
      <div style={{ display: "flex", justifyContent: "left", marginBottom: "20px", position: "relative" }}>
        <div style={{ position: "absolute", bottom: "0", width: "100%", height: "2px", backgroundColor: "#ccc" }}></div>
        <div
          onClick={() => setActiveTab("Following")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: activeTab === "Following" ? "bold" : "normal",
            borderBottom: activeTab === "Following" ? "2px solid black" : "none",
            position: "relative",
            zIndex: "1"
          }}
        >
          Following
        </div>
        <div
          onClick={() => setActiveTab("For You")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: activeTab === "For You" ? "bold" : "normal",
            borderBottom: activeTab === "For You" ? "2px solid black" : "none",
            position: "relative",
            zIndex: "1"
          }}
        >
          For You
        </div>
      </div>

      {/* Posts */}
      <div>
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", marginBottom: "20px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{post.username}</div>
              <img
                src={post.image}
                alt="post"
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "5px" }}
              />
              <p style={{ marginTop: "10px", fontSize: "14px" }}>{post.caption}</p>
              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                <button style={{ border: "none", background: "none", cursor: "pointer" }}>❤️</button>
                <button style={{ border: "none", background: "none", cursor: "pointer" }}>💬</button>
                <button style={{ border: "none", background: "none", cursor: "pointer" }}>🔖</button>
              </div>
            </div>
            {index < posts.length - 1 && <div style={{ height: "1px", backgroundColor: "#ccc", margin: "20px 0" }}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Explore;