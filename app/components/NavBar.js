/**
 * Created by ZHOU on 2016/7/11.
 */
import React, { Component,PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TouchableHighlight } from 'react-native';
import IconFontButton from  './IconFontButton';

const propTypes={
    title : PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
    rightButtonIcon: PropTypes.string,
    rightButtonIconSize: PropTypes.number,
    rightButtonIconOnPress:PropTypes.func,
    leftButtonIcon:PropTypes.string,
    leftButtonIconSize: PropTypes.number,
    leftButtonIconOnPress:PropTypes.func,
};

class NavBar extends React.Component {

    renderRightButtonIcon(rightButtonIcon, rightButtonIconOnPress){

        if (rightButtonIcon) {
            return (
                <IconFontButton iconName={ rightButtonIcon }
                                containerStyle = { styles.buttonContainer }
                                iconColor='#fff'
                                iconSize={ this.props.rightButtonIconSize }
                                onPress={()=> rightButtonIconOnPress}/>
            );
        }
        return;
    }

    renderLeftButtonIcon(navigator,leftButtonIcon,leftButtonIconOnPress) {

        let isBack = navigator && navigator.getCurrentRoutes().length > 1;

        if(!isBack&&!leftButtonIcon) return null;

        return (
            <IconFontButton iconName={isBack ? 'ios-arrow-back' : leftButtonIcon }
                            containerStyle = { styles.buttonContainer }
                            iconColor='#fff'
                            iconSize={this.props.leftButtonIconSize}
                            onPress={()=> isBack ? navigator.pop() : leftButtonIconOnPress}/>
        );
    }

    render(){
        const {title, navigator, rightButtonIcon, rightButtonIconOnPress,leftButtonIcon,leftButtonIconOnPress} = this.props;

        return(
            <View style={ styles.navBarContainer }>
                { this.renderLeftButtonIcon(navigator, leftButtonIcon, leftButtonIconOnPress) }

                <View style={ styles.titleContainer }>
                    <Text style={ styles.titleText }>{ title }</Text>
                </View>

                { this.renderRightButtonIcon(rightButtonIcon, rightButtonIconOnPress) }

            </View>
        );
    }
}

let styles = StyleSheet.create({
    navBarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        backgroundColor:'#333',
        height:44,
        padding:0,
    },
    titleContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize:17,
        color:'#fff',
        letterSpacing: 0.5,
        fontWeight: '500',
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:44,
        height:44,
    },
});

NavBar.propTypes = propTypes;

NavBar.defaultProps = {
    leftButtonIconSize : 20,
    rightButtonIconSize : 20,
};

export default NavBar;

