import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        marginVertical: 15,
        // height: 50,
        flexDirection: 'column',
        // backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    header: {

    },
    footer: {

    },
    iconContainer: {
        // flex: 1
        backgroundColor: '#d5dbef',
        width: 40,
        height: 40,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        left: 15,
    },
    textContainer: {
        width: width,
        alignItems: "center",
        marginVertical: 7
    },
    text: {
        fontSize: 18,
        fontWeight: "400",
        color: '#d5dbef'
    },
    titleContainer: {
        width: width,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 50
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: '#d5dbef'
    },

});

export default styles;