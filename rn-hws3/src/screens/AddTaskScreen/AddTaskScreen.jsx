import React from 'react';
import styles from './styles';
import {Text, View} from "react-native";
import TaskLayout from "../../common/layouts/TaskLayout/TaskLayout";

const AddTaskScreen = () => {
    return (
        <TaskLayout footerButtonText='Save' footerButtonNavigation='Main'>
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        </TaskLayout>
    );
};

export default AddTaskScreen;