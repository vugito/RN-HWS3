import React from 'react';
import styles from './styles';
import {View, Text, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Header = ({text, navigateTo}) => {

    const navigation = useNavigation();

    const handleNavigate = () => navigation.navigate(navigateTo);

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateTo}>

            </Pressable>
            <View>
                <Text>{text}</Text>
            </View>
        </View>
    );
};

export default Header;