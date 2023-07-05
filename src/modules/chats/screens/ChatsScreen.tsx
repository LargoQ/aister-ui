// File: /src/modules/chats/screens/ChatsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Chat } from '../components/Chat';
import { getChats } from '../api/chatsApi';
import { ChatDto } from '../types'; // import the ChatDto interface

export const ChatsScreen: React.FC = () => {
  const [chats, setChats] = useState<ChatDto[]>([]); // use the ChatDto interface to type the chats state

  useEffect(() => {
    const fetchChats = async () => {
      const response = await getChats();
      setChats(response);
    };

    fetchChats();
  }, []);

  return (
    <View>
      {chats.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </View>
  );
};

export default ChatsScreen;
