/**
     * Created by ZHOU on 2016/7/25.
     */
    import React from 'react';
    import { connect } from 'react-redux';
    import Main from '../views/index/Home';

    class MainContainer extends React.Component {
        componentDidMount() {

        }

        render() {
            return (
                <Main {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        const { root } = state;
        return {
            root
        };
}

export default connect(mapStateToProps)(MainContainer);