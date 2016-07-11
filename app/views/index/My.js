/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class My extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar style={styles.navBar}
                               title={{ title:'我', tintColor:'#fff' }} />
                <View style={styles.content}>
                    <Text>My Page</Text>
                </View>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
    },
    navBar:{
        backgroundColor: '#333',
    },
    content:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});