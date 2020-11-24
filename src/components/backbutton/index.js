import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';


const BackButton = ({ goBack }) => (
    <TouchableOpacity onPress={goBack} style={styles.container}>
        <Text style={{ color: 'white' }}>Voltar</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default memo(BackButton);