import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React ,{ useState } from 'react'

const Counter = () => {
    const [text, setText] = useState("")
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleDecrement = () => {
        setCount(count-1)
    }
  return (
    <View testID='parentTestId' parentId="parent">
        <View>
            <Text style={styles.textStyles} testID='countTextIdIs'>
                The count Value is
                <Text style={styles.countStyles} testID='countValue'>{count}</Text>
            </Text>
        </View>
        <View style={styles.buttonStyles}>
            <Button accessibilityLabel='testId1' testID='incrementTestId' onPress={handleIncrement} title='Increment'/>
            <Button accessibilityLabel='testId2' testID='decrementTestId' onPress={handleDecrement} title='Decrement'/>
        </View>    

        <View style={{padding: 10, border: "10px solid green"}}>
        <TextInput
            style={{height: 60}}
            placeholder="Type here to translate!"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            testID='inputNames'
        />
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
        marginBottom: 20,
        marginRight: 30
    },
    countStyles: {
        marginLeft: 10
    }
    
})

export default Counter