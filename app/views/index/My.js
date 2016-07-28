/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { setTitle } from '../../actions/MainAction'
export default class My extends React.Component{
    componentDidMount() {
        const { dispatch } = this.props;
        //dispatch(setTitle('我'));
    }

    render(){
        const { navigator, MainReducer } = this.props;
        console.log(MainReducer);

        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>My Page</Text>
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