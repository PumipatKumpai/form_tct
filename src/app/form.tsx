import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'; // npm i ....
import { RadioButton } from 'react-native-paper'; // npm install ....
import { SafeAreaView } from "react-native-safe-area-context"; // npm i ....


export default function Form() {
    const depts = [
        { label: 'Please Select Department', value: '', index: 0},
        { label: 'Civil Engineering', value: 'CE', index: 1},
        { label: 'Computer Education', value: 'CED', index: 2},
        { label: 'Electrical Engineering', value: 'EE', index: 3},
        { label: 'Mechanical Engineering', value: 'ME', index: 4},
    ];
    const [data, setData] = useState({
        name: "",
        gender: '',
        dept: '',
        comment: '',
        isAgree: false,
    })
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView style={styles.display}>
                    <Text>Name: {data.name} </Text>
                    <Text>Gender: {data.gender}</Text>
                    <Text>Dept: {data.dept}</Text>
                    <Text>Comment: {data.comment}</Text>
                    <Text>Agree: {data.isAgree?'Yes':'No'}</Text>
                </ScrollView>
                <View style={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Name: </Text>
                    <TextInput style={styles.input}
                        value={data.name}
                        onChangeText={(text)=> setData({...data, name: text})}
                        placeholder='Enter Your Name' />
                </View>
                <RadioButton.Group  value={data.gender}
                    onValueChange={value => setData({...data, gender: value})}>
                    <Text style={{fontWeight: 'bold'}}>Gender: </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Male" />
                        <Text>Male</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RadioButton value="Female" />
                        <Text>Female</Text>
                    </View>
                </RadioButton.Group>
                <View style={{paddingVertical: 20}}>
                    <Text style={{fontWeight: 'bold',
                            paddingBottom: 10,}}>Department: </Text>
                    <Dropdown data={depts}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Department"
                        onChange={item=>setData({...data, dept: item.value})}
                        value={data.dept}
                    />
                </View>
                <View>
                    <Text style={{fontWeight: 'bold',
                            paddingBottom: 10,}}>Comment: </Text>
                    <TextInput style={styles.comment}
                        multiline
                        value={data.comment}
                        onChangeText={(text)=> setData({...data, comment: text})}
                        placeholder='Enter Your Comment' />
                </View>
                <View style={styles.switch_container}>
                    <Text>Do you agree?</Text>
                    <Switch trackColor={{true: '#47F', false: 'grey'}}
                        thumbColor='pink'
                        value={data.isAgree}
                        onValueChange={(value)=>setData({...data, isAgree: value})} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
        padding: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    display: {
        height: 120,
        padding: 10,
        backgroundColor: 'pink',
        paddingHorizontal: 20,
    },
    comment: {
        height: 80,
        borderColor: '#ccc',
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    switch_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    }
})

