import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import {View,Text,ScrollView,Image} from 'react-native'
import SwitchSelector from 'react-native-switch-selector'
import {Formik } from 'formik'
import * as Yup from 'yup'

const Home = ({navigation}) =>{
    const [username,setName] = useState('')
    const [password,setPassword] =useState('')
    const [ users,setUsers] = useState([])
    const [options,setOptions] = useState([
        {label:'Light',value:'1' },
        {label:'Dark',value:'2'}
    ])

    const validate = Yup.object({
        username:Yup.string().required('Missing'),
        password:Yup.string().max(6,'Only 4-6 characters allowed').required('Missing')
    })

    const layout = useWindowDimensions()
    const switchValue = (opt) =>{
        if(opt =='Light'){
        const style = StyleSheet.create({
               backgroundColor:'green',
               color:'black'
           }) 
        }else if (opt =='Dark'){
            const style = StyleSheet.create({
                backgroundColor:'white',
                color:'red'
            })
        }
    }
    const login = ()=>{
        setUsers([...users,{
            username:username,
            password:password
        }])
        navigation.navigate('about')
       
        setPassword(' ')
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{  alignItems:'center',marginTop:10,width:layout.width,height:layout.height}}>
                    <View style={{padding:8,borderRadius:30,borderWidth:10,borderColor:'white',width:'90%',height:'90%', backgroundColor:'#f5f7f6',margin:4}} >
                    <View style={{marginTop:15}}>
                        <Image source={require('../assets/mew.jpg')} style={{width:100,height:100,borderRadius:50,borderColor:'white',borderWidth:3,alignSelf:'center'}} />
                        <Text style={{alignItems:'center',fontSize:35,alignSelf:'center'}}>Maria Fenyane</Text>
                        <Text style={{fontSize:18,padding:1,alignItems:'center',marginLeft:5,alignSelf:'center',color:'#a9dbde'}}>Polokwane</Text>
                    </View>
                    <View style={{padding:8,margin:20,alignItems:'center',height:500}}>
                     
                     <Formik
                      initialValues ={{
                         username:'',
                         password:''
                     }}
                     validateOnMount={true}
                     validationSchema={validate}
                     onSubmit={(values)=>login(values.username,values.password)}
                     >
                         {({
                             errors,
                             handleBlur,
                             handleSubmit,
                             handleChange,
                             values,
                             touched
                         })=>(
                             <View>
                                <TextInput placeholder={'Username'} value={values.username} onChangeText={handleChange('username')} onBlur={handleBlur('username')} style={{height:60,backgroundColor:'white',margin:8,padding:8,width:300,borderRadius:20}} />
                                {errors.username && touched.username ?(
                                    <Text style={{color:'red',padding:4,alignSelf:'center'}}>{errors.username} </Text>
                                ):null}
                                <TextInput  value={values.password} placeholder={'Password'} onChangeText={handleChange('password')} onBlur={handleBlur('password')}  style={{height:60,backgroundColor:'white',margin:8,padding:8,width:300,borderRadius:20}}  />
                                {errors.password && touched.password ?(
                                    <Text style={{color:'red',padding:4,alignSelf:'center'}}>{errors.password} </Text>
                                ):null}
                        <TouchableOpacity 
                            style={{
                                padding:8,
                                margin:14,
                                backgroundColor:'lightseagreen',
                                width:250,
                                height:50,
                                borderRadius:20,
                                borderWidth:2,
                                borderColor:'white'
                                }}
                            onPress={handleSubmit}>
                            <Text style={{alignSelf:'center',padding:4,color:'white'}}>
                                Login
                            </Text>
                        </TouchableOpacity>
                            </View>

                         )}
                     </Formik>
                       <Text style={{color:'#71adb0'}}> Forgot Password? Or Sign Up </Text>
                        <View style={{padding:28,width:300}}>
                        <SwitchSelector 
                        options={options}
                         initial={0}
                          onPress={(value)=>switchValue(value)}
                           textColor={'green'}
                            selectedColor={'white'} 
                            buttonColor={'#5fa353'}
                             borderColor={'black'}  
                             />
                        </View>
                    </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
    }
export default Home