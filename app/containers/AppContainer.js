/**
 * Created by ZHOU on 2016/7/7.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router} from 'react-native-router-flux';
import { connect } from 'react-redux';

const RouterWithRedux =

class AppContainer extends Component {
    constructor(props){
        super (props);

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello,Zhoujl.</Text>
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

export default connect()(Router);