import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ChatWindow from './components/ChatWindow';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  transition: background-color 0.5s ease, height 0.5s ease;
  background-color: ${(props) => (props.chatStarted ? '#1D1F21;' : '#282c34')};
`;

const App = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const handleSearch = async (searchText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: searchText } 
    ]);
    setChatStarted(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const botReply = `You searched for: "${searchText}". Here are some details...`;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: botReply }
    ]);
  };

  const handleNewChatClick = () =>{
    setIsFooterVisible(false);
    setMessages([]);
  }

  const handleFooterVisible = () => {
    setIsFooterVisible(true);
  }

  return (
    <AppContainer chatStarted={chatStarted}>
      {!chatStarted ? (
        <HomePage onSearch={handleSearch} />
      ) : (
        <>
          <ChatWindow messages={messages} onNewChatClick={handleNewChatClick} onFooterVisible={handleFooterVisible}/>
        </>
      )}
    </AppContainer>
  );
};

export default App;
