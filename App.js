import React,{useState} from "react";
import {View,Button,Text,FlatList,TouchableOpacity} from "react-native";
import {styles} from "./styles";

import Input from "./src/components/input/index";
import ListItem from "./src/components/list-item/index";
import CustomModal from "./src/components/modal/index";

export default function App() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };

  const addItem = () => {
    if (text !== "") {
      setList((currentList) => [
        ...currentList,
        { id: Math.random(), value: text },
      ]);
      setText("");
    }
  };

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} onPress={onHandlerModal} />
  );

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Listado de Artículos</Text>
      <View style={styles.content}>
        <Input
          placeholder="Nuevo artículo"
          style={styles.input}
          placeholderTextColor="#C18864"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
          keyboardType="numeric"
        />
        <Button title="    +    " onPress={() => addItem()} color="#145430" />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
      <CustomModal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <TouchableOpacity
          style={styles.modalContent}
        >
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Detalle del artículo</Text>
          </View>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Eliminar"
              onPress={() => onHandlerDelete(itemSelected.id)}
              color="#C18864"
            />
            <Button
              title="Cerrar"
              onPress={() => setModalVisible(!modalVisible)}
              color="#7CD688"
            />
          </View>
        </TouchableOpacity>
      </CustomModal>
    </View>
  );
}

