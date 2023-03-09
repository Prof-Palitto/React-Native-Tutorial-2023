import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

function AssetExample({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <View style={styles.compContainer}>
          <Text style={styles.compParagraph}>{title}</Text>
          <Image style={styles.logo} resizeMode='contain' source={image} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: '95%',
  },
   compContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  compParagraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: '100%',
  },
});

export default AssetExample;
