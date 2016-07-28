/**
 * Created by ZHOU on 2016/7/28.
 */
import React, { Component }from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import NavBar from '../../components/NavBar'
import TabBar from './TabBar'
import Home from './Home';
import Discover from './Discover';
import Life from './Life';
import My from './My';
import { setTitle } from '../../actions/MainAction';

const tabBarData =[
   { CnName:'首页', icon:'ios-home-outline', selectedIcon:'ios-home'},
   { CnName:'发现', icon:'ios-compass-outline', selectedIcon:'ios-compass'},
   { CnName:'生活圈', icon:'ios-aperture-outline', selectedIcon:'ios-aperture'},
   { CnName:'我', icon:'ios-person-outline', selectedIcon:'ios-person'}];

class Main extends React.Component {
    constructor(props){
        super(props);

        this.onChangeTab = this.onChangeTab.bind(this);
    }

    onChangeTab(tabs){
        const { dispatch } = this.props;
        dispatch(setTitle(tabBarData[tabs.i].CnName));
    }

    render(){
        const { navigator, dispatch, MainReducer } = this.props;

        console.log(MainReducer);

        return(
            <View style={styles.container}>
                <NavBar title={ MainReducer.title } navigator={ navigator}  />
                <View style={ styles.content }>
                    <ScrollableTabView tyle={styles.tabContainer}
                                       tabBarPosition='bottom'
                                       onChangeTab={ (tabs)=>this.onChangeTab(tabs) }
                                       renderTabBar={() => <TabBar style={ styles.tabBar }
                                                                   tabBarData = {tabBarData} />}>
                        <Home tabLabel="Home" style={ styles.tabView } navigator={navigator} MainReducer={MainReducer} dispatch={dispatch} />
                        <Discover tabLabel="Discover" style={ styles.tabView } navigator={navigator} MainReducer={MainReducer} dispatch={dispatch} />
                        <Life tabLabel="Life" style={ styles.tabView } navigator={navigator} MainReducer={MainReducer} dispatch={dispatch}/>
                        <My tabLabel="My" style={ styles.tabView } navigator={navigator} MainReducer={MainReducer} dispatch={dispatch}/>
                    </ScrollableTabView>
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
    },
    tabContainer:{

    },
    tabBar:{

    },
    tabView:{

    },
});

export default Main;