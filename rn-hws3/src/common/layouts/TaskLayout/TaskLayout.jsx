import React from 'react';
import styles from './styles';
import {SafeAreaView, View, Text} from "react-native";
import FooterButton from "../../../components/sections/Footers/FooterButton/FooterButton";
import Header from "../../../components/sections/Headers/Header/Header";

const TaskLayout = ({children,headerFooterShown, headerIconType, headerText, headerNavigate, footerButtonText, footerButtonNavigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.squareContainer}>
                <View style={headerFooterShown ? [styles.squareFirst, styles.topHelper] : styles.squareFirst}></View>
                <View style={styles.squareSecond}></View>
            </View>

            <Header iconType={headerIconType} footerShown={headerFooterShown} text={headerText} navigateTo={headerNavigate}/>

            {children}

            <FooterButton buttonText={footerButtonText} buttonNavigation={footerButtonNavigation}/>

        </SafeAreaView>
    );
};

export default TaskLayout;