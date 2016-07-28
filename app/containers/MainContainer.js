/**
 * Created by ZHOU on 2016/7/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import Main from '../views/index/Main';

class MainContainer extends React.Component {
    render() {
        return (
            <Main {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { MainReducer } = state;
    return {
        MainReducer
    };
}

export default connect(mapStateToProps)(MainContainer);