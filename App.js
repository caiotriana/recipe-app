
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import service from './service/API/recipe.json'

import { StyleSheet,View, SafeAreaView, ScrollView } from 'react-native';


import Button from './src/BaseComponents/Button';
import List from './src/BaseComponents/List';
import Card from './src/BaseComponents/Card';

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const receitaAPI = service;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {receitaAPI.receitas.map((item, index) => 
          <>
            <List onPress={index === isOpen ? ()=> setIsOpen(false) : ()=> setIsOpen(index)}>
              {item.receita}
            </List>
            {index === isOpen ? <Card data={item} /> : null}
          </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
