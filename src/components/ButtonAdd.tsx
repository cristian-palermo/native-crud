import {useNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {type RootStackParamList} from '../types';

export const ButtonAdd = (): JSX.Element => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('AddScreen')}>
      <Icon name="plus" size={10} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  text: {
    color: 'white',
  },
});
