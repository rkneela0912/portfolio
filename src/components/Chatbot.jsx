import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotEngine from './ChatbotEngine';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I can answer questions about Ranjith's experience and qualifications. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatbotEngine] = useState(() => new ChatbotEngine());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = chatbotEngine.processMessage(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.button
        className="chatbot-trigger"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
        aria-expanded={isOpen}
      >
        <MessageCircle size={24} aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
          >
            <motion.div
              className="chatbot-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="chatbot-header">
                <h3 id="chatbot-title">Ask about Ranjith's Experience</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="close-btn"
                  aria-label="Close chat"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <div
                className="chatbot-messages"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`message ${message.type}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    role={message.type === 'bot' ? 'status' : undefined}
                  >
                    {message.text}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="chatbot-input">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, experience, or qualifications..."
                  aria-label="Type your message"
                />
                <button
                  onClick={handleSendMessage}
                  aria-label="Send message"
                  disabled={!inputValue.trim()}
                >
                  <Send size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
