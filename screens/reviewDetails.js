import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from './styles/global';
import Card from '../shared/card';


export default function ReviewDetails({route ,navigation }){
     const {title, rating, body, key} = route.params; //Lay du lieu tu home.js 
     //const rating = route.params.rating;
    

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                {/* <Text>{rating}</Text> */}
                <View style={styles.rating}>
                    <Text>Gamezone rating:</Text>
                    {/* images.rating khai bao trong global.js so sanh voi rating o ham const {title, rating, body, key} = route.params; */}
                    <Image style={styles.tinyLogo} source={images.ratings[rating]} />
                </View>
                {/* <Text>{key}</Text> */}
            </Card>
        
        {/* <Button title='Back to home screen' onPress={() => navigation.goBack()} /> */}
        {/* <Button title='Back to home screen 2' onPress={() => navigation.navigate('Home')} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16, 
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tinyLogo:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
})

