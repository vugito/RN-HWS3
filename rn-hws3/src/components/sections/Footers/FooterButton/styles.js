import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: (width * 0.75),
        backgroundColor: '#30A6AE',
        padding: 12,
        alignItems: "center",
    },
    mt30: {
        marginTop: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 30,
    },
});

export default styles;