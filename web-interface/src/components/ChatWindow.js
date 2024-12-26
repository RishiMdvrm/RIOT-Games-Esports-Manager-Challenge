import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import ChatWindowContainer from './ChatWindowContainer';
import MessagesContainer from './MessagesContainer';
import Message from './Messages';
import NewChat from './NewChat';
import Loader from './Loader';
import Footer from './Footer';

const ChatInterface = ({ messages, onNewChatClick, onFooterVisible }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const [newChatClicked, setIsNewChatClicked] = useState(true);
  const [newMessages, setNewMessages] = useState(messages);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewChatClick = () => {
    onNewChatClick();
    setIsSearchActive(true);
    setIsSearchCompleted(false);
    setIsNewChatClicked(false);
    setNewMessages([]);
  };

  const handleSearchComplete = async (searchText) => {
    const userMessage = { sender: 'user', text: searchText };
    setNewMessages(prevMessages => [...prevMessages, userMessage]);

    setIsLoading(true);

    const botReply = `You searched for: "${searchText}". Here are some details...`;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setNewMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botReply }]);
    setIsLoading(false)
    setIsSearchActive(false);
    setIsNewChatClicked(true);
    onFooterVisible(true);
  };

  const handleSendMessage = async (message) => {
    setNewMessages((prevMessages) => [...prevMessages, { sender: 'user', text: message }]);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const botReply = `Bot response to: "${message}"`; 
    setNewMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botReply }]);
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={handleNewChatClick}>
        New Chat
        <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{ marginLeft: '10px' }} />
      </Button>
      {
        newChatClicked &&
          <>
            <ChatWindowContainer>
              <MessagesContainer>
                {newMessages.map((message, index) => (
                  <Message key={index} sender={message.sender}>
                    {message.text}
                  </Message>
                ))}
                {isLoading && <Loader />}
              </MessagesContainer>
            </ChatWindowContainer>
            <Footer onSendMessage={handleSendMessage} />
          </>
      }
      {isSearchActive && (
        <NewChat
          onSearchComplete={handleSearchComplete}
          isSearchCompleted={isSearchCompleted}
        />
      )}
    </>
  );
};

export default ChatInterface;
