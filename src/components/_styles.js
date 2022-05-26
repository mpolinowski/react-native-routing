import styled from 'styled-components/native'
import {View, Text, FlatList, TouchableOpacity } from 'react-native'

export const ListHeader = styled(Text)`
    font-size: 22px;
    font-weight: 500;
    color: dodgerblue;
    margin: 7px;
`

export const ListSubHeader = styled(Text)`
    font-size: 16px;
    font-weight: 300;
    color: mediumseagreen;
    margin-left: 7px;
`

export const ListItem = styled(View)`
    margin-bottom: 25px;
`

export const StyledList = styled(FlatList)`
    border: solid 1px;
    border-color: #eee;
    background-color: #efefef;
`

export const NavButton = styled(TouchableOpacity)`
    background-color: dodgerblue;
    border-radius: 4px;
    padding: 5px;
`

export const ListButton = styled(TouchableOpacity)`
    background-color: snow;
    color: white;
    border-radius: 4px;
    padding: 7px;
    margin: 0 7px 0 7px;
`