import React from 'react'

import { ListHeader, ListSubHeader, ListItem, ListButton } from '../components/_styles'

const ItemDetails = (props) => {
    const item = props.navigation.getParam('data')
    console.log(item)
    return (
        <ListItem>
            <ListButton onPress={() => {
                props.navigation.navigate('Details', {data: item})
            }} >
                <ListHeader>{ item.fruit }</ListHeader>
                <ListSubHeader>{ item.colour }</ListSubHeader>
            </ListButton>
        </ListItem>
    )
}

export default ItemDetails