import { StyleSheet, Text, View, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";

import { IoCartOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import { useEffect, useState } from 'react'

import ProductItem from './components/ProductItem'


export default function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            await fetch("https://6832918dc3f2222a8cb2b453.mockapi.io/api/v1/products")
                .then(res => res.json())
                .then(data => setProducts(data))
        }
        getProduct();
    }, []);
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.contentCenter} styles={{ backgroundColor: "#1BA9FF" }}>
                        <FaArrowLeft />
                        <View style={{ display: "flex", gap: 10, flexDirection: "row", width: 170, backgroundColor: "white", padding: 4 }}>
                            <FaSearch style={{ color: "black", width: 20, height: 20 }} />
                            <TextInput style={{ width: "80%" }} placeholder="Dây cáp usb" />
                        </View>
                        <IoCartOutline />
                        <MdMoreHoriz />
                    </View>
                    <View style={{ border: "1px solid #c4c4c4" }}> </View>
                    <View style={{ flex: 1, height: "40px" }}>
                        <FlatList
                            data={products}
                            keyExtractor={(item) => item.id}
                            renderItem={ProductItem}
                            style={{ height: "500px", scrollWidth: "none" }}
                            numColumns={2}
                        />

                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        height: 40,
                        backgroundColor: "#00AEEF",
                        fontSize: 20,
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}
                >
                    <FaBars />
                    <FaHome />
                    <RiArrowGoBackLine />

                </View>
            </SafeAreaView>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    contentCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
        backgroundColor: "#1BA9FF",
        color: "white",
        fontSize: 20
    },
    subHeaderCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f9f9f9",
        fontSize: 14,
        textAlign: 'left',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 60,
        backgroundColor: "red",
        color: "white",
    }
});
