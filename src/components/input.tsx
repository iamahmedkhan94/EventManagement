import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

interface Props {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  inputContainerStyle: object;
}

const TextInput: FC<Props> = props => {
  return (
    <View>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        inputContainerStyle={props.inputContainerStyle}></Input>
    </View>
  );
};
export default TextInput;
