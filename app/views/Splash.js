/**
 * Created by ZHOU on 2016/7/25.
 */
import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager
} from 'react-native';
import HomeContainer from '../containers/HomeContainer';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../images/splash.png');

class Splash extends React.Component {
    componentDidMount() {
        const { navigator } = this.props;
        this.timer = setTimeout(() => {
            navigator.resetTo({
                component: HomeContainer,
                name: 'Home'
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Image
                style={{ width: maxWidth, height: maxHeight }}
                source={splashImg}
            />
        );
    }
}

export default Splash;