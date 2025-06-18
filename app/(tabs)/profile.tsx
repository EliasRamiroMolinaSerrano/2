import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { SlideInUp, SlideOutDown } from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;

export default function ProfileScreen() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
      {visible && (
        <Animated.View
          entering={SlideInUp.springify()}
          exiting={SlideOutDown}
          style={styles.card}
        >
          <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <Image
            source={{ uri: 'https://placehold.co/400x500/png' }} // Reemplaza por una imagen real
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.name}>Keanu Reeves</Text>
            <Text style={styles.age}>54 years old</Text>

            <Text style={styles.section}>Bio</Text>
            <Text style={styles.bio}>
              Keanu Charles Reeves, whose first name means "cool breeze over the mountains" in Hawaiian...
            </Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    height: screenHeight * 0.85,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 10,
  },
  closeText: {
    fontSize: 30,
    color: '#444',
  },
  image: {
    width: '100%',
    height: 320,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  age: {
    color: '#888',
    marginBottom: 10,
  },
  section: {
    fontWeight: '600',
    marginTop: 20,
  },
  bio: {
    color: '#444',
    marginTop: 5,
  },
});
