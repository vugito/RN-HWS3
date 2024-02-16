import React from 'react';
import styles from './styles';
import {View, Text, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import CloseButtonIcon from "../../../../common/icons/CloseButtonIcon/CloseButtonIcon";
import BackButtonIcon from "../../../../common/icons/BackButtonIcon/BackButtonIcon";


const Header = ({footerShown,text, navigateTo,iconType}) => {

    const navigation = useNavigation();

    const handleNavigate = () => navigation.navigate(navigateTo);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.iconContainer} onPress={navigateTo}>
                    {iconType === 'back'
                        ? <BackButtonIcon color='#4A3780'/>
                        : iconType === 'close'
                            ? <CloseButtonIcon color='#4A3780'/>
                    : false}
                </Pressable>
                <View style={styles.textContainer}>
                    {/*<Text>{text}</Text>*/}
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
            {footerShown &&
                <View style={styles.footer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>My Todo List</Text>
                    </View>
                </View>
            }

        </View>
    );
};

export default Header;