import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    webViewStyle:{
        flex:1
    }
});

export default class WebViewContainer extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <WebView style={styles.webViewStyle}
                    automaticallyAdjustContentInsets={false}
                    source={{ uri: this.state.uri }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    />
            </View>
        );
    }
}