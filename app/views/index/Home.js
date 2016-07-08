/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Home</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{

    }
});
