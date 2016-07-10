import React from 'react';
import {Provider} from 'react-redux';
import { Router,Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';

import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';


const store = configureStore();
const RouterWithRedux = connect()(Router);

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="AppContainer" component={AppContainer} title="App" initial={true} />
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}

export default Root;