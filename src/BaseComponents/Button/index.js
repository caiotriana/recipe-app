import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components'

const ButtonWrapper = styled.TouchableOpacity` 
    background-color : #e74c3c;
    height : 48px;
    min-width : 120px;
    align-self : flex-start;
    align-items : center;
    justify-content: center;
    border-radius : 50px;
`

const ButtonText = styled.Text` 
    color : #fff;
    font-size : 16px;
    font-weight : 600;
`

export default function Button({children, onPress}) {
  return (
    <>
        <ButtonWrapper onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    </>
  );
}
