/**
 * Created by ZHOU on 2016/7/26.
 */
import React, { Component,PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes={
    name : PropTypes.string.isRequired,
    style : PropTypes.object,
    color : PropTypes.string,
    onPress : PropTypes.func,
};

class IconFontButton extends React.Component {
    render(){
        return(
            <View style={[ this.props.style ]} >
                <Icon name={ this.props.name }
                      color={ this.props.color }
                      onPress = { this.props.onPress } />
            </View>
        );
    }
}

let styles = StyleSheet.create({

});

IconFontButton.propTypes = propTypes;

IconFontButton.defaultProps ={

};

export default IconFontButton;