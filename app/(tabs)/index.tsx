import { FlatList,StyleSheet,Text, View } from "react-native";

import Card from "@/app-example/components/Card";

const dataCard = require('@/assets/images/dataCard.json')

export default function Index() {
  return (
    <View style={Styles.container}>
      <FlatList 
      data={dataCard.posts}
        renderItem ={({ item, Index }) => (
          <Card
          id={item.id}
          sumberGambar={item.sumberGambar}
          judul={item.judul}
          keterangan={item.keterangan}
          />
        )}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    padding: 16,
  }
})