/**
 * Created by ZHOU on 2016/7/25.
 */
import React from 'react';
import { connect } from 'react-redux';
import Home from '../views/index/Home';

class HomeContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Home {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { HomeReducer } = state;
    return {
        HomeReducer
    };
}

export default connect(mapStateToProps)(HomeContainer);