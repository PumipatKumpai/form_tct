import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  function dec() {
    let x = count;
    x = x-1;
    setCount(x);
  }


  return (
    <View style={styles.container}>
      <Text>Count: {count} </Text>
      <TouchableOpacity style={styles.button}
         onPress={()=>setCount(count+1)}> 
        <Text style={styles.button}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
         onPress={dec}> 
        <Text style={styles.button}> + </Text>
      </TouchableOpacity>
      <Link href='/arith'>
        <Text style = {{fontSize:24,textAlign:"center"}}></Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
    buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
