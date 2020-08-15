import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import globalstyles from '../../globalstyle';
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_FOCUS = 'INPUT_FOCUS';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        message: action.message
      };
    case INPUT_FOCUS:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    message: props.intialMessage,
    touched: false
  });
  const [onFocus, setFocus] = useState(false);

  const { onInputChange, id } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  useEffect(() => {
    const getCallback = async () =>{
      const temp= await props.callback();
      // dispatch({ type: INPUT_CHANGE, value: temp, isValid: true, message: '' });
      await textChangeHandler(temp);
      onInputChange('email', temp, true);
    }
    if (props.callback){
      getCallback();
    }
  }, []);

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let msg ='Please enter a valid input';
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
      msg ="Please enter a valid email";
    }
    if (props.password && !passwordRegex.test(text)) {
      isValid = false;
      msg ="A password requires atleast 8 characters, a capital letter, a number and a symbol";
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
      msg ="You need atleast "+ props.minLength + " characters.";
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid, message: msg });
  };

  const lostFocusHandler = () => {
    // dispatch({ type: INPUT_BLUR });
    setFocus(false);
  };
   const FocusHandler = () => {
    dispatch({ type: INPUT_FOCUS });
    setFocus(true);
  };


  return (
    <View style={[globalstyles.marginLeftMd, globalstyles.marginRightXL]}>
      <Text style={[styles.label]}>{props.label}</Text>
      <TextInput
        {...props}
        style={onFocus? (styles.inputFocus):(styles.input)}
        value={inputState.value}
        onChangeText={textChangeHandler}
        
        onBlur={lostFocusHandler}
        onFocus={FocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{inputState.message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Arial',
    fontSize: 18,
    marginVertical: 8
  },
  input: {
    fontFamily: 'Arial',
    fontSize: 15,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#000000',
    borderBottomWidth: 2
  },
  inputFocus: {
    fontFamily: 'Arial',
    fontSize: 15,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#009dff',
    borderBottomWidth: 2
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: 'red',
    fontSize: 13
  }
});

export default Input;
