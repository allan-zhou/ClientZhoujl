import React from 'react';
import { Navigator } from 'react-native';
import {Provider} from 'react-redux';
import { Router,Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import configureStore from './store/configureStore';

import AppContainer from './containers/AppContainer';
import LiferList from  './views/lifer/LiferList'

const store = configureStore();
const RouterWithRedux = connect()(Router);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="AppContainer" component={AppContainer} initial={true} />

                        <Scene key="LiferList" component={LiferList} />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}

export default Root;