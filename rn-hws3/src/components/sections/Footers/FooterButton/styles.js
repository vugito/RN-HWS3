import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonContainer: {
        width: width,
        paddingVertical: 20,
        backgroundColor: '#d5dbef',
        alignItems: "center"
    },
    button: {
        width: (width * 0.9),
        backgroundColor: '#4A3780',
        padding: 12,
        alignItems: "center",
        borderRadius: 50,
    },
    mt30: {
        marginTop: 30
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#d5dbef',
        lineHeight: 30,
    },
});

export default styles;