import { SafeAreaView, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { Component } from 'react'
import HomeHeader from '../assets/components/HomeHeader'
import HomeContent from '../assets/components/HomeContent'
import { colors, globalStyles } from '../assets/styles/GlobalStyles'

export class Home extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={globalStyles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={Styles.safe}>
                        <HomeHeader style={Styles.header} />
                        <HomeContent style={Styles.content} />
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const Styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    header: {

    },
    content: {
        backgroundColor: colors.secondary,
        flex: 1
    }
})

export default Home