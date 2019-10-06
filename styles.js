import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    thumb: {
        backgroundColor: '#f44336',
        height: 28,
        width: 28,
        borderRadius: 14,
        borderWidth: 8,
        borderColor: '#aa2e25'
    },
    track: {
        height: 16,
        borderRadius: 8,
        backgroundColor: '#f6685e'
    },
    sliderContainer: {
        padding: 16
    },
    sliderLabelsContainer: { 
        flexDirection:'row',
        justifyContent : 'space-between',
        marginTop: 8
    },
    sliderLabel: {
        fontSize: 12,
        color: '#999',
    },
    symptomLabel: {
        fontSize: 18,
        color: '#333'
    },
    listSymptomLabel: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold'
    },
    listSymptomSeverity: {
        color: '#888'
    },
    noSymptoms: {
        padding: 16,
        fontSize: 19,
        color: '#888',
        textAlign: 'center'
    }
});

export default styles;
