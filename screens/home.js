import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal,Keyboard } from 'react-native';
import { globalStyles } from './styles/global';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({navigation}){
    // console.log('Navigation: ', navigation.navigate);
    const [modalOpen, setModalOpen] = useState(false);
    // Du lieu san co
    const [reviews, setReviews] = useState([
        { title : 'Zelda, Breath of Fresh Air', rating: 5, body: 'loren ipsum', key: '1'} ,
        { title : 'Gotta Catch Them All (again)', rating: 4, body: 'loren ipsum', key: '2'},
        { title : 'Not So "Final" Fantasy', rating: 5, body: 'loren ipsum', key: '3' },

    ]);
    // add them vao truong review duoc khai bao trong reviewForm.js
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) =>{
            return [review, ...currentReviews];
        });
        // An xong nut submit o form ReviewForm thi se quay tro ve home
        setModalOpen(false);
    }

    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */} 
            {/* <Button title='go to review' onPress={() => navigation.navigate('Details')} /> */}
            <Modal visible={modalOpen} animationType= 'slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                        name='close'
                        size={24}
                        style={styles.modalClose}
                        onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
                />
            {/* Chuyen sang -> reviewDetails */}
            <FlatList 
                data= {reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        {/* <Text style={globalStyles.titleText}>{item.title}</Text> */}
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        marginBottom:0,
    },
    modalContent:{
        flex:1,
    }

})
