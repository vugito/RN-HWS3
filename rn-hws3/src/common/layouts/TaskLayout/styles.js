import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A3780',
        paddingTop: 20,
    },
    squareContainer: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 0,
        left: 10,
    },
    squareFirst: {
        width: 342,
        height: 342,
        position: 'absolute',
        top: -48,
        left: -191,
        borderWidth: 44,
        borderRadius: 171,
        borderColor: '#FFFFFF',
        // backgroundColor: '#8AE2E7',
        opacity: 0.1
    },
    topHelper: {
        top: 75
    },
    squareSecond: {
        width: 145,
        height: 145,
        position: 'absolute',
        top: -27,
        left: 327,
        borderWidth: 35,
        borderRadius: 72,
        borderColor: '#FFFFFF',
        // backgroundColor: '#8AE2E7',
        opacity: 0.1
    }
});

export default styles;