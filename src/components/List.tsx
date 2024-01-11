import React from 'react';

import {Card} from './Card';
import {useNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {useSelector} from 'react-redux';
import {selectorGlobal} from '../redux/selector';
import {StyleSheet, Text, View} from 'react-native';
import {TList} from '../redux/listSlice';

export const List = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const list = useSelector(selectorGlobal);

  return (
    <>
      {list.length > 0 ? (
        list.map((el: TList) => (
          <Card
            key={el.id}
            onPress={() =>
              navigate('DetailsScreen', {
                id: el.id,
              })
            }
            id={el.id}
            title={el.title}
            description={el.description}
          />
        ))
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Nessuna dato da mostrare</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
