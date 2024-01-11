import React, {useState} from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {ModalCustom} from './components/ModalCustom';
import {useSelector} from 'react-redux';
import {selectorSpecificById} from './redux/selector';

export const DetailsScreen = ({route}: any) => {
  const {params} = route;
  const specificList = useSelector(state =>
    selectorSpecificById(state, params.id),
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{specificList.title}</Text>
      <Text style={styles.text}>{specificList.description}</Text>
      <ModalCustom
        modalVisible={modalVisible}
        id={params.id}
        title={specificList.title}
        description={specificList.description}
        setModalVisible={setModalVisible}
      />
      <View style={styles.button}>
        <Button
          title="Aggiorna"
          color="white"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  text: {color: 'white', marginBottom: 5},
});
