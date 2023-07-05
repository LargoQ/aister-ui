// File: /src/modules/chats/components/Chat.tsx
import React from 'react'
import { Text, View } from 'react-native'

import { ChatDto } from '../types'

// import the ChatDto interface

interface ChatProps {
  chat: ChatDto // add the chat prop
}

export const Chat: React.FC<ChatProps> = ({ chat }) => {
  return (
    <View>
      <Text>{chat.title}</Text>
    </View>
  )
}

export default Chat
