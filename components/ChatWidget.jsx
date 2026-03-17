import { useState, useEffect, useRef } from "react";
import { Send, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { sendMessageToGroq } from "../services/chatService";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { theme } = useTheme();
  const chatEndRef = useRef(null);

  const isDarkMode = theme === "dark";
  const bgColor = isDarkMode ? "bg-gray-250 border-gray-700" : "bg-gray-250 border-gray-300";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const inputBg = isDarkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { role: "user", content: message };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    setMessages((prev) => [...prev, { role: "assistant", content: "Thinking..." }]);
    setTimeout(async () => {
      const botResponse = await sendMessageToGroq(message);
      setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: botResponse }]);
    }, 2000);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="fixed bottom-20 right-10 flex flex-col items-end font-[Poppins]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`w-72 h-96 shadow-lg rounded-lg flex flex-col border ${bgColor} ${borderColor}`}
          >
            <div className={`flex justify-between items-center p-3 border-b ${borderColor}`}>
              <h2 className={`text-lg font-bold ${textColor}`}>Chat</h2>
              <div className="flex gap-2">
                <button className="text-gray-600 hover:text-gray-800" onClick={handleClearChat}>
                  <Trash2 size={20} />
                </button>
                <button className="text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0 text-sm">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-sm text-center">No messages yet</p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${msg.role === "user" ? "bg-gray-300 text-black" : "bg-gray-800 text-white"}`}
                  >
                    {msg.content === "Thinking..." ? (
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Thinking...
                      </motion.span>
                    ) : (
                      msg.content
                    )}
                  </div>
                ))
              )}
              <div ref={chatEndRef} />
            </div>

            <div className={`p-3 border-t ${borderColor} ${bgColor} flex items-center gap-x-2`}>
            <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // prevent newline
        handleSendMessage();
      }
      // Shift + Enter will naturally create a new line
    }}
    placeholder="Type a message..."
    rows={1}
    className={`w-full px-3 py-2 rounded-lg outline-none resize-none ${inputBg}`}
  />
              <button
                className="bg-gray-800 hover:bg-gray-500 text-white p-2 rounded-lg"
                onClick={handleSendMessage}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center bg-gray-400 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl">💬</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

export default ChatWidget;
