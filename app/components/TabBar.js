/**
 * Created by ZHOU on 2016/7/10.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const tabsData =[
    { CnName:'首页', icon:'ios-home-outline', selectedIcon:'ios-home'},
    { CnName:'发现', icon:'ios-compass-outline', selectedIcon:'ios-compass'},
    { CnName:'生活圈', icon:'ios-aperture-outline', selectedIcon:'ios-aperture'},
    { CnName:'我', icon:'ios-person-outline', selectedIcon:'ios-person'}
];

const propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    onPress: React.PropTypes.func,
};

class TabBar extends Component {
    constructor(props){
        super (props);
    }


    renderTabOption(tabLabel, tabIndex){
        const isTabActive = this.props.activeTab === tabIndex;
        const iconName = !isTabActive ? tabsData[tabIndex].icon : tabsData[tabIndex].selectedIcon;

        return (
            <TouchableOpacity key={ tabLabel } style={styles.tab} onPress={() => this.props.goToPage(tabIndex)}>
                <Icon style={ styles.icon } name={ iconName } />
                <Text>
                    { tabsData[tabIndex].CnName }
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
        justifyContent:'center',
        alignItems:'center',
    },
    icon: {
        fontSize:30,
        color:'#900'
    },
    text: {

    },
});

TabBar.propTypes = propTypes;

export default TabBar;
