import React from 'react'
import { withNavigation } from 'react-navigation'

import { ListHeader, ListItem, ListButton, StyledList } from './_styles'
import data from '../data/fruity.json'

const HomeList = (props) => {
    return (
        <StyledList
            data={data}
            keyExtractor={item => item.fruit}
            renderItem={( {item} ) => {
                return (
                    <ListItem>
                        <ListButton onPress={() => {
                            props.navigation.navigate('Details', {data: item})
                        }} >
                            <ListHeader>{ item.fruit }</ListHeader>
                        </ListButton>
                    </ListItem>
                )}} />
    )
}

export default withNavigation(HomeList)