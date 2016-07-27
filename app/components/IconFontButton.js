/**
 * Created by ZHOU on 2016/7/26.
 */
import React, { Component,PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes={
    iconName : PropTypes.string.isRequired,
    containerStyle : View.propTypes.style,
    iconColor : PropTypes.string,
    iconSize : PropTypes.number,
    onPress : PropTypes.func,
};

class IconFontButton extends React.Component {
    render(){
        return(
            <TouchableHighlight activeOpacity={0.5} underlayColor='#222' style={ this.props.containerStyle} onPress = { this.props.onPress }>
                <Icon name={ this.props.iconName }
                      color={ this.props.iconColor }
                      size={ this.props.iconSize } />
            </TouchableHighlight>
        );
    }
}

let styles = StyleSheet.create({

});

IconFontButton.propTypes = propTypes;

IconFontButton.defaultProps = {
    iconSize:14,
};

export default IconFontButton;