import React from 'react';
import {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {type TList, updateElement} from '../redux/listSlice';

type TModalCustom = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: TList['title'];
  description: TList['description'];
  id: TList['id'];
};
export const ModalCustom = ({
  modalVisible,
  setModalVisible,
  title,
  description,
  id,
}: TModalCustom) => {
  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');

  const dispatch = useDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            autoFocus
            style={styles.input}
            value={newTitle}
            onChangeText={setTitle}
            placeholderTextColor="gray"
            placeholder={title}
          />

          <TextInput
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={setDescription}
            value={newDescription}
            placeholder={description}
          />
          <View style={styles.wrapButton}>
            <View style={styles.button}>
              <Button
                title="Conferma"
                color="white"
                onPress={() => {
                  dispatch(
                    updateElement({
                      title: newTitle,
                      description: newDescription,
                      id,
                    }),
                  );
                  setModalVisible(!modalVisible);
                  setDescription('');
                  setTitle('');
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Nascondi"
                color="white"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    height: '30%',
    backgroundColor: '#484848',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapButton: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 8,
  },
  input: {
    marginBottom: 25,
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
});
