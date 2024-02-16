import React, {useState} from 'react';
import styles from './styles';
import {Alert, Pressable, Text, TextInput, View} from "react-native";
import TaskLayout from "../../common/layouts/TaskLayout/TaskLayout";
import ListIcon from "../../common/icons/ListIcon/ListIcon";
import CalendarIcon from "../../common/icons/CalendarIcon/CalendarIcon";
import TrophyLineIcon from "../../common/icons/TrophyLineIcon/TrophyLineIcon";
// import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTaskScreen = () => {

    const [title, setTitle] = useState('');

    const [listCategoryActive, setListCategoryActive] = useState(false);
    const [calendarCategoryActive, setCalendarCategoryActive] = useState(false);
    const [trophyLineCategoryActive, setTrophyLineCategoryActive] = useState(false);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleActiveListCategory = () => {
        // Alert.alert('Category: List');

        setListCategoryActive(true);
        setCalendarCategoryActive(false);
        setTrophyLineCategoryActive(false);
    }
    const handleActiveCalendarCategory = () => {
        // Alert.alert('Category: Calendar');
        setListCategoryActive(false);
        setCalendarCategoryActive(true);
        setTrophyLineCategoryActive(false);
    }
    const handleActiveTrophyLineCategory = () => {
        // Alert.alert('Category: Trophy');

        setListCategoryActive(false);
        setCalendarCategoryActive(false);
        setTrophyLineCategoryActive(true);
    }



    const handleChangeTitleValue = (text) => setTitle(text);



    return (
        <TaskLayout
            footerButtonText='Save'
            footerButtonNavigation='Main'
            headerText='Add New Task'
            headerIconType='close'>
            <View style={styles.container}>
                <View style={styles.taskTitleContainer}>
                    <Text style={styles.titleText}>Task title</Text>
                    <TextInput
                        style={styles.titleInput}
                        value={title}
                        onChangeText={handleChangeTitleValue} placeholder='Task title'
                    />
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Category</Text>

                    <View style={styles.categoryBoxContainer}>
                        <Pressable onPress={handleActiveListCategory} style={listCategoryActive ? [styles.iconBoxContainer,styles.active] : styles.iconBoxContainer}>
                            <ListIcon color='#194A66'/>
                        </Pressable>
                        <Pressable onPress={handleActiveCalendarCategory} style={calendarCategoryActive ? [styles.iconBoxContainer,styles.active] : styles.iconBoxContainer}>
                            <CalendarIcon color='#4A3780'/>
                        </Pressable>
                        <Pressable onPress={handleActiveTrophyLineCategory} style={trophyLineCategoryActive ? [styles.iconBoxContainer,styles.active] : styles.iconBoxContainer}>
                            <TrophyLineIcon color='#403100'/>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.dateTimeBoxContainer}>
                    <View style={styles.dateBoxContainer}>
                        <Text style={styles.titleText}>Date</Text>
                        <Pressable onPress={showDatepicker} style={styles.datePickerBox}>
                            <Text>{date ? date.toLocaleDateString() : 'Date'}</Text>

                        </Pressable>
                    </View>
                    <View style={styles.timeBoxContainer}>
                        <Text style={styles.titleText}>Time</Text>
                        <Text>selected: {date.toLocaleString()}</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                    </View>
                </View>
            </View>
        </TaskLayout>
    );
};

export default AddTaskScreen;