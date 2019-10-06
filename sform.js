import React from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import {Slider} from 'react-native-elements';
import styles from './styles';

class SymptomsForm extends React.Component {

    state = {
        symptoms: [
                {id: 0, text: "Cough", value: 1},
                {id: 1, text: "Sore throat", value: 1},
                {id: 2, text: "Nausea", value: 1},
                {id: 3, text: "Difficulty breathing", value: 1},
                {id: 4, text: "Palpitations", value: 1},
                {id: 5, text: "Eye irritation", value: 1}
        ]
    }    

    render() {
        return(
            <FlatList
                data = { this.state.symptoms }
                renderItem = {({ item, index }) => 
                    <View style = {styles.sliderContainer}>
                        <Text style = {styles.symptomLabel}>{ item.text }</Text>
                        <View style = {styles.sliderLabelsContainer}>
                            <Text style = {styles.sliderLabel}>None</Text>
                            <Text style = {styles.sliderLabel}>Unbearable</Text>
                        </View>
                        <Slider
                            value = { item.value }
                            minimumValue = {1}
                            maximumValue = {10}
                            step = {1}
                            thumbStyle = {styles.thumb}
                            trackStyle = {styles.track}
                            minimumTrackTintColor = '#f44336'
                            maximumTrackTintColor = '#ebebeb'
                            onSlidingComplete = { (v) => {
                                let s = this.state.symptoms;
                                s[index].value = v;
                                this.setState({
                                    symptoms: s
                                });
                            }}
                        />                
                    </View>
                }
                keyExtractor = {(item) => "K" + item.id}
                ListFooterComponent = {() =>
                    <View style = {{padding: 16}}>
                        <Button title = { "Next" } onPress = {() => {
                            this.props.nav.navigate('list', {
                                symptoms: this.state.symptoms.filter((i) => i.value > 1)
                            });
                        }}/>
                    </View>
                }               
            />
        );
    }
}

export default SymptomsForm;
