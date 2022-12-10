import React, { useState } from 'react';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { Feather, Entypo } from '@expo/vector-icons';

function AppCard({ image, title, noOfReviews, price, description, stars, category }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <TouchableOpacity style={styles.mainContainer}
                onPress={() => setModalVisible(true)}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: image }}
                        style={{ flex: 1, resizeMode: 'contain' }} />
                </View>
                <View style={styles.rightContainer}>
                    <Text variant="displayLarge" numberOfLines={2}
                        style={{ fontSize: 16 }}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Rating
                            showRating={false}
                            readonly={true}
                            startingValue={stars}
                            type="custom"
                            tintColor='white'
                            ratingBackgroundColor="lightgrey"
                            ratingColor="orange"
                            imageSize={20}
                        />
                        <Text variant="displayLarge" numberOfLines={3}
                            style={{ marginLeft: 6, color: 'grey' }}>{noOfReviews}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                        <Text variant="displayLarge" numberOfLines={1}
                            style={{ fontSize: 17, fontWeight: 'bold' }}>Rs. {price}</Text>
                        {count >= 1 &&
                            <View style={styles.counterView}>
                                <TouchableOpacity onPress={() => { setCount(count - 1) }}
                                    style={{ width: 18, height: '100%' }}>
                                    <Entypo name="minus" size={20} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontWeight: 'bold' }}>{count}</Text>
                                <TouchableOpacity onPress={() => { setCount(count + 1) }}
                                    style={{ width: 18, height: '100%' }}>
                                    <Entypo name="plus" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <Text variant="displayLarge" numberOfLines={1}
                        style={{ fontSize: 15, color: 'grey' }}>Category: {category}</Text>
                </View>
            </TouchableOpacity >
            <Modal transparent={true} visible={modalVisible} animationType="slide">
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.modalContainer}
                    onPress={() => { setModalVisible(false); }}>
                    <View
                        style={styles.modalView}>
                        <Image source={{ uri: image }}
                            style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, paddingLeft: 5 }}>
                            <Text style={{ fontSize: 16 }}>Description:   </Text>
                            <View style={{ flex: 1 }}>
                                <Text numberOfLines={18} style={{ fontSize: 16 }}>{description}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 20 }} >
                            <TouchableOpacity onPress={() => { setCount(count + 1); setModalVisible(false); }}
                                style={styles.addToCart}>
                                <Feather name="shopping-cart" size={24} color="white" />
                                <Text numberOfLines={1} style={styles.text_addToCart}>Add To Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                style={styles.close} >
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

export default AppCard

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 150,
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey'
    },
    leftContainer: {
        flex: 1.2,
        paddingLeft: 8,
        paddingVertical: 8,
    },
    rightContainer: {
        flex: 2,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 9,
        paddingBottom: 11,
        justifyContent: 'space-between',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: "center",
        alignItems: "center",
    },
    addToCart: {
        flexDirection: 'row',
        height: 50,
        width: '58%',
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_addToCart: {
        marginLeft: 15,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    close: {
        width: '35%',
        height: 50,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterView: {
        width: 75,
        height: 23,
        flexDirection: 'row',
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#edebec',
        borderWidth: 1,
        borderColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
