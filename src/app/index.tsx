import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Count: {count} </Text>
      <TouchableOpacity style={styles.button
         onPress={function xxx(){
            setCount(count+1);
         }}> 
        <Text style={styles.button}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
