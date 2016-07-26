/**
 * Created by ZHOU on 2016/6/29.
 */
import React, { Component }from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import NavBar from '../../components/NavBar'
import { toastShort } from  '../../utils/ToastUtil'
import Discover from './Discover';


class Home extends React.Component{
    _redirectToDiscover(){
        const { navigator } = this.props;

        navigator.push({
            component: Discover,
            name: 'Discover'
        });
    }

    render(){
        const { navigator, HomeReducer } = this.props;

        return(
            <View style={styles.container}>
                <NavBar title='首页' navigator={ navigator}  />
                <View style={ styles.content }>
                    <Button
                        style={{fontSize: 20, color: 'green'}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this._redirectToDiscover()}>
                        Press Me!
                    </Button>
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