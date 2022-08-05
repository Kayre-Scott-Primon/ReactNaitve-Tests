import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native'

export default function App(){

    const [count, setCount] = useState(0)

    const action = () => {
        setCount(count + 1)
    }

    return(
        <View style={styles.container}>
          <StatusBar backgroundColor={'#000'}/>
            <Text style={styles.labelInfo}>
                App by unit test
            </Text>
            <TouchableOpacity onPress={action} style={styles.button} testID={'buttonCounter'}>
                <Text style={styles.labelButton}>
                    Button
                </Text>
            </TouchableOpacity>
            <Text style={styles.labelCounter} testID={'textLabel'}>
                Count: {count}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#487',
    borderWidth: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelInfo: {
    fontSize: 25,
    color: '#fff',
    marginVertical: 10
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#806',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  labelCounter: {
    fontSize: 25,
    color: '#fff',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10
  },
  labelButton: {
    color: '#fff',
    fontSize: 23
  }
})