import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {removeElement} from '../redux/listSlice';

type TCard = {
  id: number;
  title: string;
  description: string;
  onPress: () => void;
};

export const Card = ({id, title, description, onPress}: TCard): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.icon}>
        <Icon
          name="trash-o"
          size={20}
          color="red"
          onPress={() => dispatch(removeElement(id))}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
  icon: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: 'white',
    textTransform: 'capitalize',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
