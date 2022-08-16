import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../styles/GlobalStyles'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export class HomeHeader extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <View style={Styles.field}>
                    <TextInput
                        style={Styles.text}
                        placeholder='Search...'
                        returnKeyLabel='Search'
                        autoCapitalize="none"
                        placeholderTextColor="#999999"
                    />
                    <TouchableOpacity style={Styles.touchable}>
                        <EvilIcons name='search' color={colors.contrast} size={32}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    field: {
        flexDirection:'row',
        padding:20,
        borderWidth:1,
        borderColor: colors.secondary,
    },
    text: {
        flex:1,
        height:35,
        padding:10,
        color:colors.contrast,
        backgroundColor:colors.accent,
        borderRadius:20,
        marginRight:10

    },
    touchable: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        aspectRatio:1/1,
        backgroundColor:colors.accent
    },
})

export default HomeHeader