import React from 'react';
import styles from './styles';
import TaskLayout from "../../common/layouts/TaskLayout/TaskLayout";
import {View, Text} from "react-native";

const MainScreen = () => {
    return (
        <TaskLayout
            headerFooterShown={true}
            headerText='February 14, 2024'
            headerIconType='back'
            footerButtonText='Add Task'
            footerButtonNavigation='AddTask'>
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        </TaskLayout>
    );
};

export default MainScreen;