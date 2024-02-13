import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./src/navigation/root";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <RootNavigation/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
