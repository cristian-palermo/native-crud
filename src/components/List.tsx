import React, {useState} from 'react';

import {Card} from './Card';
import {useNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {useSelector} from 'react-redux';
import {selectorGlobal} from '../redux/selector';
import {FlatList, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native';
import {TList} from '../redux/listSlice';

export const List = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const list = useSelector(selectorGlobal);
  const [input, setInput] = useState('');

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Search" onChangeText={text => setInput(text)} />
      </View>

      <FlatList
        data={list}
        renderItem={({item}: {item: TList}) => {
          if (
            input === '' ||
            item.title.toLowerCase().includes(input.toLowerCase())
          ) {
            return (
              <Card
                key={item.id}
                onPress={() =>
                  navigate('DetailsScreen', {
                    id: item.id,
                  })
                }
                id={item.id}
                title={item.title}
                description={item.description}
              />
            );
          }
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 4,
    padding: 8,
  },
  text: {
    color: 'white',
  },
});
