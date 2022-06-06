import React from "react";
import {TextInput} from "react-native";
import {styles} from "./styles";

const Input = ({
    placeholder,
    style={},
    placeholderTextColor="#a00",
    value,
    onChangeText,
    onBlur = ()=>null,
    onFocus = ()=>null,
    editable,
    ...props
}) =>{

    const onHandleChangeText = (text)=>{
        onChangeText(text);
    }
    const onHandleBlur = ()=>{
        onBlur();
    }
    const onHandleFocus = () => {
        onFocus();
      };

    return(
        <TextInput 
            {...props}
            placeholder={placeholder}
            style={[styles.input, {...style}]}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onHandleChangeText}
            onBlur={onHandleBlur}
            onFocus={onHandleFocus}
        />
    );
};

export default Input;