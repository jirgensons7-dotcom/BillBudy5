import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <Text style={styles.title}>BillBuddy 5</Text>
        <Text style={styles.body}>
          Your app is installed and running. This minimal screen proves the build is healthy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7FAFF', alignItems: 'center', justifyContent: 'center' },
  card: { padding: 24, borderRadius: 16, backgroundColor: '#ffffff', width: '86%', elevation: 2 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8, color: '#1C3D5A' },
  body: { fontSize: 16, lineHeight: 22, color: '#2D3748' },
});