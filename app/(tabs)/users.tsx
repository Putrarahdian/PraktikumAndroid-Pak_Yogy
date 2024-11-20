import { FlatList, StyleSheet, View } from "react-native";

import Card from "@/app-example/components/Card";
import { GetUsers } from "../api/GetUsers";
import { useState } from "react";
import Index from ".";

export default function Users() {
    const [data, setData] = useState(null)
    GetUsers
    .then(result => {
        setData(result?.data.data)
    })
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({item : Index}) => (
                <Card 
                id={item.id}
                sumberGambar={item.avatar}
                judul={item.first_name}
                keterangan={item.Last_Name}
                />
            )} 
            />
        </View>
    );
}