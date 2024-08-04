import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const Hijo = ({ contador, incrementar, decrementar }) => {
    return (
        <View style={styles.container}>
            <Text>{contador}</Text>
            <Button title='Incrementar' onPress={incrementar} />
            <Button title='Decrementar' onPress={decrementar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 10,
    },

});

export default Hijo;
