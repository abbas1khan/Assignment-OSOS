import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import AppCard from "./components/AppCard";
import apiClient from "./api/apiClient";
import AppScreen from "./components/AppScreen";
import { Text } from "react-native-paper";

export default function App() {
    const [listings, setListings] = useState([]);
    const getData = async () => {
        const response = await apiClient.get("/products");
        if (response.ok) {
            setListings(response.data);
            // console.log(response.data);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Shopping</Text>
                </View>
                <View style={styles.FlatListView}>
                    <FlatList
                        data={listings}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <AppCard
                                image={item.image}
                                title={item.title}
                                stars={item.rating.rate}
                                noOfReviews={item.rating.count}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                            />
                        )}
                    />
                </View>
            </View>
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // backgroundColor: '#3341c4',
    },
    textView: {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82d9e2',
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    FlatListView: {
        flex: 1,
        paddingHorizontal: 18,
    }
});
