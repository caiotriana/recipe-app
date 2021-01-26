import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components'

const CardWrapper = styled.View` 
    background-color : rgba(0,0,0, .05);
    height : 10%;
    padding : 24px;
    flex : 1;
`

const CardTitle = styled.Text` 
    font-weight : bold;
    font-size : 24px;
    margin-bottom : 16px;
`

const CardIngredients = styled.Text` 
    font-size : 16px;
    margin-bottom : 16px;
`

export default function Card({data}) {
  const { receita, ingredientes, modoPreparo } = data
  
  let treatmentIngredients = ingredientes.replaceAll(', ','\n')

  return (
    <>
        <CardWrapper >
          <CardTitle> 
              {receita} 
          </CardTitle>
          <CardIngredients> 
            {treatmentIngredients} 
          </CardIngredients>
          <Text> {modoPreparo} </Text>
        </CardWrapper>
    </>
  );
}
