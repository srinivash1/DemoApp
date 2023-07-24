import { View, Text, Button, StyleSheet } from 'react-native'
import React ,{ useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        setCount(count-1)
    }
  return (
    <View>
      <Text style={styles.textStyles}>The Count value is -  {count} </Text>
        <View style={styles.buttonStyles}>
            <Button onPress={handleIncrement} title='Increment'/>
            <Button onPress={handleDecrement} title='Decrement'/>
        </View>       
    </View>
  )
}

const styles = StyleSheet.create({
    buttonStyles: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textStyles: {
        textAlign: "center",
        fontSize: 30,
        marginBottom: 20
    }
    
})

export default Counter