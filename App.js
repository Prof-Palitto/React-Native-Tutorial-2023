import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import AssetExample from './components/AssetExample';
import FullView from './components/fullView';
import styles from './styles';
import data from './data';

export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardPress(card) {
    setSelectedCard(card);
  }

  function handleClose() {
    setSelectedCard(null);
  }

  if (selectedCard) {
    return <FullView card={selectedCard} onClose={handleClose} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>LA MIA PRIMA APP</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <AssetExample
              title={item.title}
              image={item.image}
              onPress={() => handleCardPress(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}
