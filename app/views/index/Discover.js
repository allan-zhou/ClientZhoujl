/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper'

export default class Discover extends React.Component{
    constructor(props){
        super(props);
        console.log('Discover constructor');
    }

    componentDidMount() {
    }

    render(){
        const { navigator, MainReducer,dispatch } = this.props;

        console.log(MainReducer);

        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Discover Page</Text>
                </View>
                <Swiper  height={ 200 } autoplay={true}>
                    <View style={styles.slide}>
                        <Text style={styles.text}> Hello Swiper 你好</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}> Beautiful</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.text}> And simple</Text>
                    </View>
                </Swiper>
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
    },
    wrapper: {
        //flex:1,
    },
    slide: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    text: {
        color:'#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});