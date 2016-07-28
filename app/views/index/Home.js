/**
 * Created by ZHOU on 2016/6/29.
 */
import React, { Component }from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import Discover from './Discover';
import { setTitle } from '../../actions/MainAction'


class Home extends React.Component{
    constructor(props){
        super(props);
        console.log('Home constructor');
    }

    componentDidMount () {
        const { dispatch } = this.props;
        //dispatch(setTitle('首页'));

        console.log('Home componentDidMount');
    }

    render(){
        const { navigator, MainReducer } = this.props;
        console.log(MainReducer);
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Home Page</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    list:{

    },
    listItem:{

    },
});

export default Home;