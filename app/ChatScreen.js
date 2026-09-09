import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const MODES = ['Coach','Focus','Learn','Create','Review','Reflect'];

export default function ChatScreen() {
  const [mode, setMode] = useState('Coach');
  const [input, setInput] = useState('');

  const sendMessage = () => {
    // Send input + mode + memory context to your AI API
    console.log("Mode:", mode, "Message:", input);
  }

  return (
    <View style={{ padding: 20 }}>
      <Button title={mode} onPress={() => setMode(MODES[(MODES.indexOf(mode)+1)%6])} />
      <TextInput value={input} onChangeText={setInput} placeholder="What do you want to train?" />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}