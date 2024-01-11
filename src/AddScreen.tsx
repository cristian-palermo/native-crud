import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';

import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addElement} from './redux/listSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

export const AddScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const isDisabled = !title && !description;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(
      addElement({
        title,
        description,
        id: Math.random() * 100000,
      }),
    );
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="gray"
        placeholder="Title"
      />

      <TextInput
        placeholderTextColor="gray"
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
      />

      <View style={styles.button}>
        <Button
          title="Add"
          color="white"
          onPress={handleChange}
          disabled={isDisabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  button: {
    backgroundColor: '#f4511e',
    width: '40%',
    borderRadius: 8,
  },
  input: {
    marginBottom: 25,
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
});
