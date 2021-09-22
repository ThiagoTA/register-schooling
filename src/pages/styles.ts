import styled from "styled-components/native";
import { Platform } from "react-native";


export const Container = styled.View`

    flex: 1;
    background-Color: #FFF;
    padding-left: 30px;
    padding-top: 70px;
    padding-right: 30px;
    
`

export const Title = styled.Text`
    color: #909090;
    font-size: 30px;
    padding-bottom: 10px;
    font-weight: bold;
    align-items: center;
`

export const Input = styled.TextInput`
    background-color: #FFF;
    color: #000000;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '9px'};
    margin-top: 5px;
    border: 2px #909090;
    border-radius: 20px;

`

export const Code = styled.Text`
    padding-left: 10px;
`

export const Schooling = styled.Text`
    padding-left: 160px;
`