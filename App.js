import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { Button } from './components/Button/index'
import { RoundButton, ButtonRow } from './components/RoundButton/index'
import './components/Reactron/ReactotronConfig'
import Reactotron from 'reactotron-react-native'

export default class App extends React.Component {


    render() {
        Reactotron.log('hello rendering world')
        Reactotron.display({
            name: 'KNOCK KNOCK',
            preview: 'Who\'s there?',
            value: 'Orange.'
        })

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello</Text>
                <Button/>

                <ButtonRow>
                    <RoundButton
                        title='Lap'
                        color='#8B8B90'
                        background='#151515'
                        disabled
                    />
                    <RoundButton
                        title='Start'
                        color='#50D167'
                        background='#1B361F'
                    />
                </ButtonRow>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        paddingTop: 130,
        paddingHorizontal: 20
    },
    text: {
        color: "#FFFFFF",
        fontSize: 50,
        fontWeight: "200",
        width: 110
    }
})