/**
 * Created by ZHOU on 2016/7/7.
 */
import React from 'react';
import {
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View
} from 'react-native';

import Splash from '../views/Splash';
import { naviGoBack } from '../utils/CommonUtil';

let tempNavigator;
let isRemoved = false;

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    goBack() {
        return naviGoBack(tempNavigator);
    }

    configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        let Component = route.component;
        tempNavigator = navigator;
        if (route.name === 'WebViewPage') {
            BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
            isRemoved = true;
        } else {
            if (isRemoved) {
                BackAndroid.addEventListener('hardwareBackPress', this.goBack);
            }
        }
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                <StatusBar
                    backgroundColor="#333"
                    barStyle="default"
                />
                <Navigator
                    ref="navigator"
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: Splash,
                        name: 'Splash'
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#eee'
    },
    navigator: {
        flex: 1
    },
});


export default AppContainer;