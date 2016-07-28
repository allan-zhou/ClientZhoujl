/**
 * Created by ZHOU on 2016/7/28.
 */
import React, { Component,PropTypes }from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const propTypes={
    style : View.propTypes.style,
    height : PropTypes.number,
};

class TopProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        var {height, width} = Dimensions.get('window')

        return(
            <View style={ styles.wrapper }  height={this.props.height} autoplay={true}>
                <View style={styles.slide}>
                    <Image style={{width: width, height: this.props.height }}
                           source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
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
    image: {
        flex:1,
    },
});

TopProjects.propTypes = propTypes;

TopProjects.defaultProps = {
    height : 300,
};

export default TopProjects;