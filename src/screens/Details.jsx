import React from 'react'

import { ListHeader, ListSubHeader, ListItem } from '../components/_styles'

const ItemDetails = (props) => {
    const item = props.navigation.getParam('data')
    console.log(item)
    return (
        <ListItem>
                <ListHeader>{ item.fruit }</ListHeader>
                <ListSubHeader>{ item.colour }</ListSubHeader>
        </ListItem>
    )
}

export default ItemDetails