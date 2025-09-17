import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductItem = function ({ item }) {
    return (
        <>
            <View style={{ flex: 1, flexDirection: "row", gap: "5px", padding: "5px", borderBottom: "1px solid #c3c3c3" }}>
                <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
                <View>
                    <Text numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ width: 170, fontSize: 15 }}>
                        {item.name}
                    </Text>
                    <Text numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ width: 170, fontSize: 15, marginTop: "10px" }}>
                        Shop: <Text style={{ color: "red" }}>{item.provider}</Text>
                    </Text>
                </View>
                <View style={{ display: "flex", justifyContent: "center" }}>
                    <TouchableOpacity style={styles.button}>Chat</TouchableOpacity>
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


