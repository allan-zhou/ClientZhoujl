import React from 'react';
import {Provider} from 'react-redux';
import { Router,Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import Home from './views/index/Home'
import Discover from './views/index/Discover'

const store = configureStore();
const RouterWithRedux = connect()(Router);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="Home" component={Home} title="Home" initial={true} />
                        <Scene key="Discover" component={Discover} title="Discover" />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}

export default Root;