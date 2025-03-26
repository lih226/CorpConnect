import { useState } from "react";
import DMCard from "../components/DMCard"; // Ensure correct import

function DM() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<{
    [key: string]: { sender: string; text: string; file?: File }[];
  }>({
    Alice: [],
    Bob: [],
    Charlie: [],
  });
  const [inputMessage, setInputMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null); // State for the file

  // Send message (including files)
  const sendMessage = () => {
    if ((inputMessage.trim() !== "" || file) && selectedUser) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedUser]: [
          ...prevMessages[selectedUser],
          { sender: "You", text: inputMessage, file: file || undefined },
        ],
      }));
      setInputMessage(""); // Clear text input
      setFile(null); // Clear file input after sending
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      // Validate file type (JPEG, PDF, DOCX)
      const validTypes = ["image/jpeg", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile); // Set file if valid
      } else {
        alert("Please upload a valid file (JPEG, PDF, DOCX).");
      }
    }
  };

  // Handle selecting a recipient (DMCard)
  const handleSelectUser = (user: string) => {
    setSelectedUser(user);
  };

  // Function to get the last message (text or "File" if it's a file)
  const getLastMessage = (user: string) => {
    const lastMessage = messages[user][messages[user].length - 1];
    if (lastMessage && lastMessage.file) {
      return "File"; // If it's a file, return "File"
    }
    return lastMessage ? lastMessage.text : "";
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left sidebar for DM cards */}
      <div
        style={{
          width: "250px",
          padding: "20px",
          borderRight: "1px solid #ddd",
          backgroundColor: "#f4f4f4",
          height: "100vh", // Ensure it takes full height
          overflowY: "auto",
        }}
      >
        <DMCard
          name="Alice"
          profilePic="https://via.placeholder.com/150"
          lastMessage={getLastMessage("Alice")}
          onSelect={() => handleSelectUser("Alice")}
        />
        <DMCard
          name="Bob"
          profilePic="https://via.placeholder.com/150"
          lastMessage={getLastMessage("Bob")}
          onSelect={() => handleSelectUser("Bob")}
        />
        <DMCard
          name="Charlie"
          profilePic="https://via.placeholder.com/150"
          lastMessage={getLastMessage("Charlie")}
          onSelect={() => handleSelectUser("Charlie")}
        />
      </div>

      {/* Chat window (only shows when a user is selected) */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          borderLeft: "1px solid #ddd",
          overflowY: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {selectedUser ? (
          <>
            <h2>Chat with {selectedUser}</h2>
            <div
              style={{
                flexGrow: 1,
                overflowY: "auto",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderBottom: "1px solid #ddd",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              {messages[selectedUser].map((msg, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: msg.sender === "You" ? "#D6C5F0" : "#e0e0e0", // Lighter purple for sent messages
                    color: msg.sender === "You" ? "#fff" : "#000",
                    padding: "8px",
                    borderRadius: "5px",
                    marginBottom: "8px",
                    alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                    fontWeight: msg.sender === "You" ? "bold" : "normal", // For emphasis
                    fontSize: "14px", // Adjust text size if needed
                  }}
                >
                  <strong>{msg.sender}:</strong> {msg.text}
                  {msg.file && (
                    <div style={{ marginTop: "10px" }}>
                      <a
                        href={URL.createObjectURL(msg.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "#5a54e8",
                          fontSize: "14px",
                        }}
                      >
                        {msg.file.name}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                style={{
                  flex: 1,
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <input
                type="file"
                accept=".jpg,.jpeg,.pdf,.docx"
                onChange={handleFileChange}
                style={{
                  marginLeft: "10px",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  marginLeft: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#5a54e8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div style={{ color: "gray", fontSize: "16px" }}>
            Select a conversation to start chatting.
          </div>
        )}
      </div>
    </div>
  );
}

export default DM;
