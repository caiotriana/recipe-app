import React from 'react';
import { TouchableOpacity} from 'react-native';
import styled from 'styled-components'

const ListItem = styled.Text`
    padding : 24px;
    font-size : 14px;
    font-weight : 500;
`
const ListItemBottom = styled.View`
    height : 2px;
    background-color : #e74c3c;   
`


export default function List({children, onPress}) {
  return (
    <>
        <TouchableOpacity onPress={onPress}>
            <ListItem>
                {children}
            </ListItem>
            <ListItemBottom/>
        </TouchableOpacity>
    </>
  );
}
