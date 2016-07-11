/**
 * Created by ZHOU on 2016/7/11.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';

const leftButtonConfig = {
    title: '<返回',
    tintColor:'#fff',
    handler: function onNext() {
        Actions.pop();
    }
}
class LiferList extends Component {
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar style={styles.navBar}
                               title={{ title:'生活家列表', tintColor:'#fff' } }
                               leftButton = { leftButtonConfig }/>
                <View style={ styles.content }>
                    <Text>我是生活家列表页面</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LiferList;