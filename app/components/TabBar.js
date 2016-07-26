/**
 * Created by ZHOU on 2016/7/10.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    tabBarData: React.PropTypes.array,
    onPress: React.PropTypes.func,
};

class TabBar extends Component {
    constructor(props){
        super (props);

        this.onProess = this.onProess.bind(this);
    }

    onProess(tabIndex){
        this.props.goToPage(tabIndex)
    }

    renderTabOption(tabLabel, tabIndex){
        const isTabActive = this.props.activeTab === tabIndex;
        const iconName = !isTabActive ? this.props.tabBarData[tabIndex].icon : this.props.tabBarData[tabIndex].selectedIcon;

        return (
            <TouchableOpacity key={ tabLabel } style={styles.tab} activeOpacity={1}
                              onPress={() => this.onProess(tabIndex)}>
                <Icon style={ styles.icon } name={ iconName } />
                <Text style={ styles.text }>
                    { this.props.tabBarData[tabIndex].CnName }
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={ styles.tabs }>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tabs: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: '#999',
        paddingBottom:5,
        paddingTop:5,
    },
    tab: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    icon: {
        fontSize:30,
        color:'#900'
    },
    text: {
        fontSize:12,
    },
});

TabBar.propTypes = propTypes;

export default TabBar;
