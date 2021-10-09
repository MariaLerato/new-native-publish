import React, { useEffect, useState } from "react";
import {ScrollView, SafeAreaView,View,Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Initialusers from "./initialusers";
import { Avatar } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

const Details = ({route})=>{
    const {itemId} = route.params
    const id = parseInt(itemId)
    const [info,setInfo] = useState([])
    let item = ()=>{
        return Initialusers.User.filter(action =>{
            return action.id === id
        })
    }
    const navigation = useNavigation()
    const message = ()=>{
        alert('Added To Collection')
        navigation.navigate('firebase')
    }
    useEffect(()=>{
        setInfo(item())
    },[])
    return(
        <SafeAreaView>
            <ScrollView>
            {
                info.map(data =>
                    <View key={data.id} style={{alignItems:'center'}}>
                        <View style={{width:'60%',height:300,alignSelf:'center'}}>
                             <Avatar  size='xlarge' source={{uri:data.img}} style={{width:'100%',height:300,alignSelf:'center',margin:8}} />
                        </View>
                        <View>
                        <Text style={{fontSize:35,padding:4,alignSelf:'center',color:'green'}}>
                            {data.title}
                        </Text>
                        <Text style={{margin:4,padding:8,fontSize:20}} >    
                            {data.subtitle}
                        </Text>
                        </View> 
                        <TouchableOpacity 
                        style={{
                            backgroundColor:'lightseagreen',
                            alignSelf:'center',width:300,height:50,borderRadius:50}}
                            onPress={message}
                        >
                            <Text style={{color:'white',alignSelf:'center',paddingTop:12,fontSize:18}} >
                                + Add
                            </Text>
                        </TouchableOpacity>
                        <Text> </Text>
                    </View>
                    )
            }
            </ScrollView>
        </SafeAreaView>
    )
}
export default Details