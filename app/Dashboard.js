import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { supabase } from '../lib/supabase'; // you'll add this

export default function Dashboard({ userId }) {
  const [streak, setStreak] = useState(0);
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data } = await supabase.from('memory').select('*').eq('user_id', userId);
    setMemory(data || []);
    setStreak(7); // replace with real logic
  }

  const exportPDF = async () => {
    const html = `
      <h1>Cognitica 30-Day Report</h1>
      <p>Streak: ${streak} days</p>
      <p>Goals: ${memory.map(m => m.value.goal).join(', ')}</p>
    `;
    const { uri } = await Print.printToFileAsync({ html });
    await Sharing.shareAsync(uri);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Mind Score: 71</Text>
      <Text>🔥 {streak} Day Streak</Text>
      <Button title="Export PDF Report" onPress={exportPDF} />
    </View>
  );
}