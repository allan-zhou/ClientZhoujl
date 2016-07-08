import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

import WebViewContainer from './WebViewContainer'

export default class HomeContainer extends WebViewContainer {
    
      constructor(props){
        super (props);

        this.state = {
            //uri: 'http://mobiletest.yuanxin2015.com/YuanXinClient/views/index.html'
            uri: 'http://www.baidu.com'
        };
    }
}