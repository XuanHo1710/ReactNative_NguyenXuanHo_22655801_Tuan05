import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductItem = function ({ item }) {
    return (
        <>
            <View style={{ flex: 1, gap: 10, justifyContent: "center", padding: 5 }}>
                <Image source={{ uri: item.image }} style={{ width: 150, height: 80, display: "flex", justifyContent: "center" }} />
                <View>
                    <Text numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ width: 170, fontSize: 15 }}>
                        {item.name}
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "c9c9c9" }} />
                    <Text style={{ fontSize: 12 }}>(15)</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{ width: 170, fontSize: 15, marginTop: 10, lineHeight: 10, height: 20, fontWeight: "bold" }}
                    >
                        {item.price.toLocaleString()} đ:    <Text style={{ color: "#c7c7c7", fontWeight: "300" }}>-39%</Text>
                    </Text>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
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

export default ProductItem;


