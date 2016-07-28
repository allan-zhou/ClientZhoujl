/**
 * Created by ZHOU on 2016/6/29.
 */
import React, { Component }from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BlockSplitBar from '../../components/BlockSplitBar'
import BlockTitle from '../../components/BlockTitle'

import TopProjects from './userControls/TopProjects'
class Home extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const { navigator, MainReducer } = this.props;

        console.log(MainReducer);
        return(
            <View style={styles.container}>
                <TopProjects  height={220} />
                <BlockSplitBar />
                <BlockTitle title='热门活动' />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        //flex:1,
    },
    topProjects:{

    },
});

export default Home;