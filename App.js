import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from './styles';
import SymptomsForm from './sform';
import SymptomsList from './slist';

class Screen extends React.Component {
    static navigationOptions = {
        title: 'Symptoms Tracker',
        headerStyle: {
            backgroundColor: '#f44336',
        },
        headerTintColor: '#fff'
    }
}

class StartScreen extends Screen {
    render() {
        return <SymptomsForm nav = {this.props.navigation}/>;
    }
}

class ListScreen extends Screen {
    render() {
        return <SymptomsList nav = {this.props.navigation}/>;
    }
}

const Main = createStackNavigator({
    start: {screen: StartScreen},
    list: {screen: ListScreen}
});

export default createAppContainer(Main);;
