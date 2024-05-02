import { ScrollView, StyleSheet, Text, View,Image  } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProgressChart} from "react-native-chart-kit";
import * as Progress from 'react-native-progress';

const steps = 60;
const cals = 100;
const exercises = 40;
  
const EditDailyGoalsScreen = ({navigation}) => {

    
  return (
    <View>
      <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, width: '100%'}}>
    <Ionicons name="arrow-back" size={36} color="#fff" />
    <Text style={styles.title}>Daily Goals Details</Text>
    <MaterialIcons name="done" size={36} color="#fff" />
  </View>
      </View>
     <View style={styles.Infor}>
        <View style={{ padding : 30,  }}>
        <Text style={styles.title1}>Edit Goals</Text>
       <Text>Steps, Cals, Exercises</Text>
        </View>
        <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>

        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Steps per day</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: COLORS.primary }}>10,000 steps</Text>
            </View>
        </View>

        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Calories per day</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: '#F2B455'}}>1000 cals</Text>
            </View>
        </View>

        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Exercises per day</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: COLORS.primary }}>5 exercises</Text>
            </View>
        </View>
        <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' , marginTop : 10}}></View>

        <View style={{ padding : 30,  }}>
        <Text style={styles.title1}>Percent of Daily Goals</Text>
        <View style={{ flexDirection : 'row', paddingVertical : 20,  }}>
            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Progress.Bar progress={steps / 100} width={100} color='#5BB6AF' style={{marginBottom : 20}}/>
            <Text>{steps}%</Text>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"700" }}>Steps</Text>
            </View>

            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Progress.Bar progress={cals / 100}  width={100} color='#F2B455' style={{marginBottom : 20}} />
            <Text>{cals}%</Text>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"700" }}>Cals</Text>
            </View>

            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Progress.Bar progress={exercises / 100} width={100} color='#B50036' style={{marginBottom : 20}}/>
            <Text>{exercises}%</Text>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"700" }}>Exercises</Text>
            </View> 
        </View>
      

        </View>   
        <View style={{ width :"100%", height : '100%', backgroundColor: '#D9D9D9', alignItems :'center', padding :20 }}>
            <Text style={{ color :'#7E7E7E' }}>Is this information incorrect? <Text style={{ color :"#2A64E4" }}>Report Food.</Text></Text>
        </View>  
    </View>
  </View>
  )
}

export default EditDailyGoalsScreen

const styles = StyleSheet.create({
 
    Infor : {
        top : -20,
        borderRadius : 30,
        width : '100%',
        height : 3000,
        backgroundColor :'#fff'
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        marginLeft :20, 
        color :'#fff',

    },
    title1 : {
        fontSize : 20,
        fontWeight : 'bold',
        
        color :'#000',

    },
    header : {
        height : 130,
        width : '100%',
        backgroundColor : COLORS.primary,
  
        justifyContent :"center"
    }
})