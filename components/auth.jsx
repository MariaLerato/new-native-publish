import React, {useEffect, useState} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Animated,
    TextInput,
    Button, Pressable
} from "react-native";
import {Avatar, Header, ListItem} from "react-native-elements";
import Users from "./users";
import {BackgroundImage} from "react-native-elements/dist/config";
import {rgbaColor} from "react-native-reanimated/src/reanimated2/Colors";
import firebase from './firebase'

const Landing = ({ navigation }) => {
    
    const [ users, setUsers ] = useState([])
    
    const img = { uri: 'https://images.pexels.com/photos/9676177/pexels-photo-9676177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
    
    const [email, setEmail ] = useState()
    
    const [pass, setPass ] = useState()
    
    useEffect(() => {
       Users.getData().on('value', snapshot => {
           const usersData = [];
           snapshot.forEach(action => {
               const info = action.val()
               const key = action.key
               usersData.push({
                   key: key,
                   name: info.name,
                   surname:info.surname,
                   dsc: info.dsc,
                   status: info.status
               })
               setUsers(usersData)
           })
           
       })
    },[])

    
    const Login = () => {
        //login with firebase
        console.log('testing button ', email , pass)
        Users.login(email, pass,navigation)
    }
    
    const markComplete = (event) => {
        
        console.log('my unique id ', event)
        Users.updateData(event, { status: true}).then(res => {
            console.log('done')
        }).catch(err => console.log(err))
    }    
    
    const renderUsers = ({ item, index }) => {
        return (
                <View style={styles.cover}>
                    <View style={
                        [
                            styles.item, { textDecorationLine: item.status === true ? "line-through" : "none"}
                        ]
                    }>
                        <ListItem key = { index }  >
                            <Button title={'Mark Complete'} onPress={ () => markComplete(item.key) } />
                            <ListItem.Content>
                                <ListItem.Title >
                                    { item.name } { item.surname }
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron onPress = {() => navigation.navigate('About', {
                                itemId : item.key
                            })}/>
                        </ListItem>
                    </View>
                </View>
        )

    }
    
    return (
        <>
     <BackgroundImage source={img} resizeMode={'cover'} >
         <View style={ styles.cover }>
             <Text style={styles.heading }>Login</Text>

             <View style={styles.loginArea}>
                 <TextInput tppe={'text'} style={styles.input} placeholder={'Email'} onChangeText={text => setEmail(text)}/>
                 <TextInput secureTextEntry={true} style={styles.input} placeholder={'Password'} onChangeText={text => setPass(text)}/>
             </View>
             <View style={styles.loginButton}>
                 <Pressable style={styles.button} onPress={ Login } >
                     <Text>
                         Sign in
                     </Text>
                 </Pressable>
             </View>
             <View style={styles.accountArea}>
                 <Text style={styles.TextArea} onPress={() => navigation.navigate('Adduser')}>DON'T HAVE AN ACCOUMNT ? SIGN UP </Text>
             </View>
         </View>
     </BackgroundImage>
        </>
    )
}



const styles = StyleSheet.create({
        cover : {
            backgroundColor: rgbaColor(0,0,0,0.8),
            position: "relative",
            height: '100vh',
            width: '100%',
            padding: 40
        },
    heading: {
            color: 'white',
            fontSize: 30,
            textTransform: "uppercase",
            fontWeight: "400",
            textAlign: "center",
            marginTop: 100
    },
    loginArea : {
            marginTop: 60
    },
    input : {
        borderWidth: 1,
        height: 40,
        marginTop: 15,
        borderColor: 'white',
        paddingLeft: 10,
        borderRadius: 10,
        color: 'white'
    },
    button : {
            borderRadius: 10,
            width: '100%',
            backgroundColor: 'white',
            padding: 10,
            textAlign: "center",
            textTransform: "uppercase"
    },
    loginButton: {
            marginTop: 20
    },
    accountArea : {
        bottom: 10,
        textAlign: "center",
        color: 'white',
        width: '100%',
        marginTop: 40
    },
    TextArea :{ 
            color: 'white',
        textAlign: "center",
        fontSize: 9
    }
})

export default  Landing