/**
 * Created by ZHOU on 2016/7/11.
 */
import React, { Component,PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontButton from  './IconFontButton';

const propTypes={
    title : PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
    rightButton: PropTypes.object,
};

class NavBar extends React.Component {

    _renderLeftButton(navigator){

        if (navigator && navigator.getCurrentRoutes().length > 1) {

            let backButton = (<Icon name="ios-arrow-back" size={14} color="#fff" onPress={ ()=>navigator.pop() } />);

            return backButton;
        }
        return {};
    }

    render(){
        const { navigator } = this.props.navigator;

        return(
            <NavigationBar style={styles.navBar}
                           title={{ title: this.props.title , tintColor:'#fff' } }
                           leftButton = { ()=> <IconFontButton name="ios-arrow-back" size={14} color="#fff" onPress={ ()=>navigator.pop() } /> }
                           rightButton = { this.props.rightButton } >
            </NavigationBar>
        );
    }
}

let styles = StyleSheet.create({
    navBar:{
        backgroundColor:'#333'
    },
});

NavBar.propTypes = propTypes;

NavBar.defaultProps ={ };

export default NavBar;

