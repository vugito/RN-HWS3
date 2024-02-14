import React from 'react';
import styles from './styles';
import {SafeAreaView, View, Text} from "react-native";
import FooterButton from "../../../components/sections/Footers/FooterButton/FooterButton";

const TaskLayout = ({children, footerButtonText, footerButtonNavigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.squareContainer}>
                <View style={styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>

            <Header/>
            {children}
            <FooterButton buttonText={footerButtonText} buttonNavigation={footerButtonNavigation}/>
        </SafeAreaView>
    );
};

export default TaskLayout;