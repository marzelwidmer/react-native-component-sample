import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class AwesomeComponent extends Component {
    state = {
        counter: 1
    }
    updateCounter() {
        this.setState({ counter: 2 });
    }

    render(){
        return (
            <View style={styles.container}>
                {this.text()}
                <Text numberOfLines={1}>
                    The counter is {this.state.counter}
                </Text>
            </View>
        )
    }

    text() {
        return <Text>That's an awesome component</Text>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})
// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeComponent', () => AwesomeComponent);
