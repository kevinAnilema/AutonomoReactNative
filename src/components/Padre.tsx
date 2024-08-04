import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Hijo from './Hijo';

interface PadreProps {
    contador: number;
}

const Padre: React.FC<PadreProps> = (props) => {
    const [count, setCount] = useState<number>(props.contador);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <View style={styles.container}>
            <Hijo contador={count} incrementar={increment} decrementar={decrement} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Padre;
