/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../../components/NavBar'

export default class Discover extends React.Component{
    render(){
        const { navigator } = this.props;

        return(
            <View style={styles.container}>
                <NavBar title='发现' navigator={navigator} />
                <View style={styles.content}>
                    <Text>Discover Page</Text>
                </View>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});