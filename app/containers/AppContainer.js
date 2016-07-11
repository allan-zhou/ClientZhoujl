/**
 * Created by ZHOU on 2016/7/7.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from '../components/TabBar';
import Home from '../views/index/Home';
import Discover from '../views/index/Discover';
import Life from '../views/index/Life';
import My from '../views/index/My';

class AppContainer extends Component {
    constructor(props){
        super (props);
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollableTabView style={styles.tabContainer} tabBarPosition='bottom'
                                   renderTabBar={() => <TabBar style={ styles.tabBar } />}>
                    <Home tabLabel="Home" style={ styles.tabView }/>
                    <Discover tabLabel="Discover" style={ styles.tabView }/>
                    <Life tabLabel="Life" style={ styles.tabView }/>
                    <My tabLabel="My" style={ styles.tabView }/>
                </ScrollableTabView>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:5,
    },
    tabContainer:{

    },
    tabBar:{
        paddingBottom:5,
    },
    tabView: {

    }
});

export default AppContainer;