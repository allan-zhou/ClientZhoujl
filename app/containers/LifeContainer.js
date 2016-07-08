import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

import WebViewContainer from './WebViewContainer'

export default class LifeContainer extends WebViewContainer {
    
      constructor(props){
        super (props);

        this.state = {
            url: 'http://mobiletest.yuanxin2015.com/YuanXinClient/views/life/index2.html'
        };
    }
}