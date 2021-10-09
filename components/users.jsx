import React from "react";
import {ScrollView, SafeAreaView,View,Text ,ImageBackground,TouchableOpacity,useWindowDimensions,Image} from "react-native";
import { Card,Icon } from "react-native-elements";

const FirstMap = ({navigation})=>{
    const layout = useWindowDimensions()
    return(
        <SafeAreaView>
            <ScrollView>
               <ImageBackground  source={require('../assets/tea-books.jpg')} style={{width:layout.width,padding:4,height:350}} >
                   <View style={{padding:8,margin:4}}>
                       <Text style={{color:'green',alignSelf:'flex-start',padding:8}}>
                           Untitled Reading Collection
                       </Text>
                       <Text style={{color:'white',fontSize:25,alignSelf:'flex-start',margin:10}}>
                            One Stop New Daily Creations From Romance,Humor,Horror To Paranormal 
                       </Text>
                   </View>
                   <TouchableOpacity style={{padding:8,backgroundColor:'#db32ca',width:100,marginLeft:19}}  ><Text style={{color:'white',padding:4}}>Get Started</Text>

                   </TouchableOpacity>
               </ImageBackground>
               <View style={{alignItems:'center',margin:20,padding:10,borderWidth:5,borderColor:'aliceblue',borderRadius:20,marginTop:-50,backgroundColor:'aliceblue'}}>
                   <Text style={{fontSize:20,alignSelf:'center',fontWeight:'700'}}>
                         Reading all of Books     
                   </Text>
                   <Text style={{fontWeight:'700',fontSize:20}}>
                   Untitled is the Library in your hand
                       </Text>
                   <Text style={{margin:4,padding:4}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </Text>
                   <TouchableOpacity style={{borderColor:'green',borderWidth:2,width:100,height:40,margin:20}} >
                        <Text style={{color:'green',alignSelf:'center',padding:4}}>
                            Explore
                        </Text>
                   </TouchableOpacity>
                <View style={{flex:1,}}>
                    <View style={{paddingHorizontal:8,paddingVertical:6,marginHorizontal:'1%',alignSelf:'flex-start',marginBottom:6,color:'white'}}>
                        <Card>
                            <ImageBackground source={require('../assets/romance.jpg')} style={{width:'100%'}} >
                            <Card.Title style={{color:'white',fontSize:25}}>Romance Section</Card.Title>
                            <Text style={{margin:4,padding:2,color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                            </ImageBackground>
                        </Card>
                        <Card>
                        <ImageBackground source={require('../assets/humor.jpg')} style={{width:'100%'}} >
                            <Card.Title style={{color:'white',fontSize:25}}>Humor Section</Card.Title>
                            <Text style={{margin:4,padding:2,color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                            </ImageBackground>
                        </Card>
                        <Card>
                        <ImageBackground source={require('../assets/paranormal.jpg')} style={{width:'100%'}} >
                            <Card.Title style={{color:'white',fontSize:25}}>Paranormal Section</Card.Title>
                            <Text style={{margin:4,padding:2,color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                            </ImageBackground>
                        </Card>
                        <Card>
                        <ImageBackground source={require('../assets/horror.jpg')} style={{width:'100%'}} >
                            <Card.Title style={{color:'white',fontSize:25}}>Horror Section</Card.Title>
                            <Text style={{margin:4,padding:2,color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                            </ImageBackground>
                        </Card>
                        <Card>
                        <ImageBackground source={require('../assets/wolves.jpg')} style={{width:'100%'}} >
                            <Card.Title style={{color:'white',fontSize:25}}>Werewolves Section</Card.Title>
                            <Text style={{margin:4,padding:2,color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                            </ImageBackground>                      
                        </Card>
                </View>
                    
                </View>
                </View>
             
            </ScrollView>
        </SafeAreaView>
    )
}
export default FirstMap