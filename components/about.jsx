import React, { useEffect, useState } from "react";
import { SafeAreaView,Text,TextInput,View,StyleSheet } from "react-native";
import {Button, Header } from "react-native-elements";
import Users from "./users";


const  About = ({route,navigation}) => {
    const {itemId} = route.params
    const id = itemId
    const [todo,setTodo] = useState([])
    const [title,setTitle] = useState('')
    const [des,setDes] = useState(' ')

    useEffect(()=>{
        Users.getDataById(id).once('value', snapshot =>{
           const data = snapshot.val()
           setTitle(data.title)
           setDes(data.des)
        },[])
    })

    const updateTodo = () =>{
        const TodoList = []
        Users.updateTodo(id,{
            title: title,
            des:des
        })
        
        .then(()=> console.log('update complete'))
        .catch(err => console.log(err))
        navigation.goBack()
        setTodo(TodoList)
    }
    const deleteTodo = () =>{
        Users.deleteTodo(id)
        .then(()=> console.log('deleted'))
        .catch(err=> console.log(err))
        navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.border}>
            <View style={styles.viewCover}>
                <Header>
                    <Button title={"Back"} onPress={()=>navigation.goBack()} />
                </Header>
                <View style={{padding:2,marginTop:3}}>
                    <Text style={{color:'black',fontSize:25,fontFamily:'Algerian'}}>
                        Title:  <TextInput style={styles.textinput}  onChangeText={(text)=>setTitle(text)} defaultValue={title} placeholder={"Please Enter Value"} />
                    </Text>
                    <Text style={{color:'black',fontSize:25,fontFamily:'Algerian'}} >
                      Date:  <TextInput style={styles.textinput} onChangeText={(text)=>setDes(text)} value={des} placeholder={"Please Enter Date"} />
                    </Text>
                </View>   
                <View style={styles.button}>
                    <Button title={"delete Todo"} onPress={deleteTodo} style={{padding:10,margin:20,borderRadius:20, color:'black'}} />
                    <Button title={"Update Todo"} onPress={updateTodo} style={{padding:10,margin:20,borderRadius:20, color:'black'}} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    viewCover:{
        
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 0.5,
        padding:8
    },
    complete:{
    backgroundColor:'grey'
    },
    border:{
        borderWidth:4,
        borderColor:'#3ab2bd',
        height:800
    },
    textinput:{
        height:50,
        padding:11,
        margin:4,
        borderRadius:10,
        backgroundColor:'gainsboro',
        width:400,
        fontSize:15,
        color:'white'
        },
        button:{
            padding:20,
            margin:4,
            flex:1,
            flexDirection:'row',
            width:300
        }
})
export default About