import React from 'react';
import styles from './styles';
import {Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const FooterButton = ({buttonNavigation, buttonText}) => {

    const navigation = useNavigation();
    const handleNavigate = () => navigation.navigate(buttonNavigation);

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handleNavigate} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default FooterButton;