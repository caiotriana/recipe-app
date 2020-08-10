import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components'

const CardWrapper = styled.View` 
    background-color : #f1f2f6;
    height : 10%;
    padding : 24px;
    flex : 1;
`

export default function Card(props) {
  return (
    <>
        <CardWrapper >
          <Text> {props.data.receita} </Text>
          <Text> {props.data.ingredientes} </Text>
          <Text> {props.data.modoPreparo} </Text>
        </CardWrapper>
    </>
  );
}
