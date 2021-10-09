import React, { useState } from 'react'
import {ScrollView, SafeAreaView,View,Text } from 'react-native'
import { Tile,ListItem, Avatar } from "react-native-elements";
import Initialusers from './initialusers';
import { useNavigation } from "@react-navigation/native";

const SecondMap = ()=>{
  const navigation = useNavigation()
  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={{fontSize:25,alignSelf:'center',padding:8,margin:4,color:'black'}} > Favourites of The Week </Text>
            {Initialusers.User.map(action=>
              <ListItem key={action.id}>
                <Avatar rounded size='medium' source={{uri:action.img}} />
                <ListItem.Content>
                    <ListItem.Title style={{color:'black',fontSize:18}}>{action.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron onPress={()=> navigation.navigate('details',{

                  itemId:action.id
                })}/>
              </ListItem>
            )}
      </ScrollView>
    </SafeAreaView>
  )
}
export default SecondMap