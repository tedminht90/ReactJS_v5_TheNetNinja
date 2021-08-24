import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function FlatButton({ text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>
                    <Text style={styles.buttonText}> { text } </Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button:{
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:14,
        backgroundColor: '#f01d71',
        textAlign: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign: 'center',
    }
})