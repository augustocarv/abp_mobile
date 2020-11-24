import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const Alert = ({ visible, text }) => {


    return (
        <View style={styles.container}>
            <Snackbar
                visible={visible}
                style={styles.snackbar}
                >
                {text}
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 150,
        justifyContent: 'space-between',
    },
    snackbar: {
        backgroundColor: 'purple'
    }
});

export default Alert;