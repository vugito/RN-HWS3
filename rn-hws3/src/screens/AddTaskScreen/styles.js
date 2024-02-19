import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5dbef'
    },
    taskTitleContainer: {
        // backgroundColor: '#dadada',
        width: width,
        padding: 15
    },
    titleText: {
        fontSize: 16,
        fontWeight: '500'
    },
    titleInput: {
        // width: width*0.90,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
        fontSize: 18
    },
    categoryContainer: {
        // backgroundColor: '#fff',
        // backgroundColor: 'green',
        width: width,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    categoryBoxContainer: {
        // padding: 12,
        marginLeft: 20,
        gap: 10,
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    iconBoxContainer: {
        // flex: 1
        // backgroundColor: '#a7cde1',
        width: 44,
        height: 44,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 22,
        borderColor: '#fff',
        borderWidth: 4
    },
    active: {
        borderColor: '#4A3780'
    },
    dateTimeBoxContainer: {
        width: width,
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    dateBoxContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    datePickerBox: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
        // backgroundColor: 'red',
    },
    timeBoxContainer: {
        flex: 1,
        flexDirection: 'column'

    },
    timePickerBox: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
    },
});

export default styles;