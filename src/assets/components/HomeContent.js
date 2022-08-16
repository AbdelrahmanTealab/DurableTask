import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class HomeContent extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>HomeContent</Text>
      </View>
    )
  }
}

export default HomeContent