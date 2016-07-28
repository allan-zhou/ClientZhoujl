/**
 * Created by ZHOU on 2016/7/28.
 */
import React, { Component,PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const propTypes={
    title : PropTypes.string,
    height : PropTypes.number,
    backgroundColor: PropTypes.string,
};

class BlockTitle extends React.Component {
    render(){
        return(
            <View style={{ height:this.props.height, backgroundColor: this.props.backgroundColor }}>
                <Text style={styles.text}> {this.props.title} </Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{

    },
});

BlockTitle.propTypes = propTypes;

BlockTitle.defaultProps = {
    title : '',
    height : 44,
    backgroundColor:'#fff'
};

export default BlockTitle;