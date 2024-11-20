import { StyleSheet,Text, View } from "react-native";
import profile from "@/app-example/components/profile";
import Profil from "@/app-example/components/profile";

export default function about() {
    return (
        <View style={styles.container}>
            <Profil />
        </View>
    );
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    }
})