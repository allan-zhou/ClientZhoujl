/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Discover extends React.Component{
    constructor(props){
        super(props);
        console.log('Discover constructor');
    }

    componentDidMount() {
        const { dispatch } = this.props;
        //dispatch(setTitle('发现'));

        console.log('Discover componentDidMount');
    }

    render(){
        const { navigator, MainReducer,dispatch } = this.props;

        console.log(MainReducer);

        return(
            <View style={styles.container}>
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