import React, { useState } from "react";
import {View,useWindowDimensions} from 'react-native'
import { TabView,SceneMap } from "react-native-tab-view";
import SecondMap from "./firebase";
import FirstMap from "./users";

const TabViewMenuPage = ({navigation}) =>{
    const layout = useWindowDimensions()
    const [index,setIndex]= useState(0);
    const [routes] = useState([
        {key:'first',title:'First'},
        {key:'second',title:'Second'}
    ])
    return(
       <TabView 
       navigationState={{index,routes}}
       renderScene={renderScene}
       onIndexChange={setIndex}
       initialLayout={{width:layout.width}}
       />
    )
}
const FirstPage = ()=>{
    return(
    <View  >
        <FirstMap />
        </View>
    )
}
const SecondPage = ()=>{
    return(
    <View>
        <SecondMap />
    </View>
    )
}
const renderScene = SceneMap({
    first:FirstPage,
    second:SecondPage,
});
export default TabViewMenuPage