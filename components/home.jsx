import React, { useEffect, useState } from "react";
import {  FlatList, StyleSheet,Text,View,TextInput,ScrollView } from "react-native";
import { ListItem,  Button } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Users from "./users";
import firebase from "./firebase";

const  Home = ({navigation}) =>{

    const [todo,setTodo] = useState([])
    const [title,setTitle] = useState('')
    const [isDone,setIsDone] = useState(false)
  
    useEffect(()=>{
            Users.getData().on('value', snapshot =>{
                const TodoList = []
                snapshot.forEach(action =>{
                const key = action.key
                const data = action.val()
            TodoList.push({
                 key:key,
                 title:data.title,
                 done:!isDone
            })
            setTodo(TodoList)
            })
        })
    },[])
    const onCheck = () => {
        return alert('Task has been completed')
    }
    const createDelete =(key)=>{
        firebase.ref().child(`/todo/${key}`).remove((err)=>{
            if(err){
                console.log(err)
            }
        })
    }
    const createTodo = () =>{
        const todo = {
            title:title,
       
            done:!isDone,
        }
        Users.createUsers(todo)
        .then(()=>  console.log('todo created'))
        .catch(err => console.log(err))       
    }
   
    const displaytodo = ({item,index}) => {
        return (
            <View >
                <ListItem key={ index} style={styles.viewCover}>
                    <ListItem.Content>
                        <ListItem.Title>
                        <MaterialCommunityIcons name={"check"} size={35} color={'red'} onPress={onCheck} /> {item.title} 
                        </ListItem.Title>
                        <ListItem.Subtitle>
                            Status: {item.done}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron onPress={()=> navigation.navigate('about',{
                        itemId : item.key
                    })} />
                </ListItem>
            </View>
        )
    }
    return(

            <ScrollView style={styles.border}>
                <View style={styles.viewCover} >
               
                    <Text style={{fontFamily:'Algerian',fontSize:35,color:'black',padding:4}}>
                   Todo App
                    </Text>
                    <View style={styles.container}>
                        <Text>
                            <TextInput style={styles.textinput} onChangeText={(text) => setTitle(text)} value={title} placeholder={"please enter value"} /> <MaterialCommunityIcons name={"plus"} size={35} color={"white"} onPress={createTodo} style={{backgroundColor:"#8803fc",borderRadius:30} }/>
                        </Text>
                        <View style={styles.button}>
                            <Button title={"Delete All"} onPress={createDelete} />
                        </View>
                    </View> 
                    <View style={styles.viewCover}>
                        {
                            todo && todo.length ? (
                                <FlatList data={todo} renderItem={displaytodo}
                                keyExtractor={(item)=> item.key}
                                removeClippedSubviews={true}
                                />

                                ):(
                                <View style={{height:700,width:1000}}>
                                    <Text>
                                        Nothing scheduled for now
                                    </Text>
                                </View>   
                            )
                        }
                    </View>
                </View>
            </ScrollView>

    )
}
const styles = StyleSheet.create({
    viewCover:{
        
            borderBottomColor: 'gainsboro',
            borderBottomWidth: 0.5,
    },
    complete:{
        backgroundColor:'grey'
    },
    border:{
        borderWidth:4,
        borderColor:'#3ab2bd',
        height:800
    },
    header:{
        color:'white',
        padding:2
    },
    textinput:{
    height:50,
    padding:11,
    margin:4,
    borderRadius:10,
    backgroundColor:'gainsboro',
    width:300
    },
    container:{
        marginTop:8,
        padding:4
    },
    button:{
        width:300,
        alignItems:'left',
        padding:11,
        margin:4,
        marginTop:4
    }
});
export default Home
