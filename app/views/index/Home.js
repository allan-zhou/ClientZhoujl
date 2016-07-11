/**
 * Created by ZHOU on 2016/6/29.
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar style={styles.navBar}
                               title={{ title:'首页', tintColor:'#fff' } }/>
                <View style={ styles.content }>
                    <Text>Home Page</Text>
                    <View style={ styles.list }>
                        <View style={ styles.listItem }>
                            <Text style={{ fontSize:16, }} onPress={ Actions.LiferList }>
                                点我，进入生活家列表页面!
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex:1,
    },
    navBar:{
        backgroundColor: '#333',
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

