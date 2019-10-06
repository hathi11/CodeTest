import React from 'react';
import styles from './styles';
import {Text, View, FlatList} from 'react-native';

class SymptomsList extends React.Component {    
    render() {
        const symptoms = this.props.nav.getParam('symptoms', []);
        return(
            <FlatList data = { symptoms }
                renderItem = { ({item, index}) => 
                    <View style = {styles.sliderContainer}>
                        <Text style = {styles.listSymptomLabel}>{item.text}</Text>
                        <Text style = {styles.listSymptomSeverity}>Severity: {item.value}</Text>
                    </View>
                }
                keyExtractor = {(item) => "K" + item.id}
                ListEmptyComponent = {() =>
                    <Text style = {styles.noSymptoms}>No Symptoms!</Text>
                }
            />
        );
    }
}

export default SymptomsList;
