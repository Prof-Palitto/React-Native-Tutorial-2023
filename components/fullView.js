import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

function FullView({ card, onClose }) {
  return (
    <View style={styles.fullViewContainer}>
      <View style={styles.fullViewContent}>
        <Text style={styles.fullViewText}>{card.title}</Text>
        <Image style={styles.logo} resizeMode='contain' source={card.image} />
        <Text>{card.description}</Text>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="close" size={24} color="black" />
          <Text style={{marginLeft: 5, fontSize: 16}}>Close</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fullViewContainer: {
    position: 'absolute',
    top: Constants.statusBarHeight + 60,
    bottom: 80,
    left: 40,
    right: 40,
    flexDirection: 'column',
  },
  fullViewContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  fullViewText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    height: 60,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 160,
    width: '100%',
  },
});

export default FullView;
