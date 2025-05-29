// ChatApp.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatApp = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const currentUser =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(localStorage.getItem("doctor"));
  const isDoctor = localStorage.getItem("doctor") !== null;

  useEffect(() => {
    if (currentUser?._id) {
      fetchContacts();
    }
  }, [currentUser]);

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get(
        `/api/chats/contacts?userId=${currentUser._id}`
      );
      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  const fetchMessages = async (contactId) => {
    try {
      const { data } = await axios.get(
        `/api/chats/messages?user1=${currentUser._id}&user2=${contactId}`
      );
      setMessages(data);
      setSelectedChat(contactId);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const message = {
        senderId: currentUser._id,
        receiverId: selectedChat,
        content: newMessage,
      };
      await axios.post("/api/chats/send", message);
      setMessages([...messages, message]);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">
          {isDoctor ? "Patients" : "Doctors"}
        </h2>
        {contacts.map((c) => (
          <div
            key={c._id}
            className={`p-2 cursor-pointer rounded mb-2 ${
              selectedChat === c._id ? "bg-blue-200" : "bg-gray-100"
            }`}
            onClick={() => fetchMessages(c._id)}
          >
            {c.name || c.fullName || c.email}
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="w-3/4 p-4 flex flex-col">
        {selectedChat ? (
          <>
            <div className="flex-1 overflow-y-auto mb-4 border p-4 bg-white rounded">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 ${
                    msg.senderId === currentUser._id
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  <span className="inline-block bg-gray-200 rounded px-3 py-1">
                    {msg.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border rounded p-2"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">Select a chat to start messaging.</p>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
