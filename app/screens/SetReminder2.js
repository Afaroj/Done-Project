import React from 'react';
import {View,
    Text,
    StyleSheet
        
} from 'react-native';
import Heading from '../Components/Heading';
import StartGameScreen from './StartGameScreen';

function SetReminder2(props) {
    return (
        <View style={styles.screen}>
            <Heading title ="Set Reminder"/>
            <StartGameScreen/>

        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        
      },
});
export default SetReminder2;