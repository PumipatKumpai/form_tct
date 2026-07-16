import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


const Arith = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    
    function reset(){
        setX('');
        setY('');
        setZ(0);
    }
    return(
        <View>
            <View>
                <Text style={{fontSize:28, fontWeight:'Bold',
                 backgroundColor:"aqua"}}>result:{z}</Text>
                <Text style={{fontSize:28,
                    backgroundColor:'aqua'}}>result:</Text>
            </View>

                <View>
            <TextInput  keyboardType="number-pad"
                    placeholder = "Enter number(x)"
                    value = {x}
                    onChangeText={(text)=>setX(text)}
                />
            <TextInput  keyboardType="number-pad"
                    placeholder = "Enter number(y)"
                    value = {y}
                    onChangeText={(text)=>setY(text)}
                />
            </View>
            <View >
                    <Button title="ADD" style ={{
                        backgroundColor: '#47F',
                        color:'white',
                        fontSize:28
                    }}
                    onPress={() => setZ((Number(x) + Number(y)))}
                     />
                    <Button title="SUB"
                    onPress={() => setZ((Number(x) - Number(y)))}
                     />
                    <Button title="RESET"
                    onPress={reset}
                     />
            </View>
        </View>
    )
        
}
export default Arith;