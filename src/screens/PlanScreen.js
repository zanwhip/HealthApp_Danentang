import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const PlanScreen = ({navigation}) => {
  return (
    <View>
     <ImageBackground source={require('../assets/img/exercise.png')} style={styles.picture}>
     <View style={styles.Infor}>
        <View style={{ flexDirection :'row' ,padding : 20,  }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={36} color="#fff" />
    </TouchableOpacity>
            <Text style={styles.title}>Strong Glutes & Thighss</Text>
        </View>
        <ScrollView style={{ marginBottom : 600 }}>
        <View  style={{ flexDirection :'row' ,padding : 20, marginHorizontal : 50, justifyContent : 'space-between' }}>
        <Text style={{ fontSize : 16, color : COLORS.primary, }}>Overview</Text>
        <Text>Schedule</Text>
        </View>


        <View>
        <View style={{ justifyContent : 'space-between' , flexDirection :'row' , marginHorizontal : 20,}}>
            <Text>Duration :</Text>
            <Text>28 days</Text>
        </View>
        <View style={{ justifyContent : 'space-between' , flexDirection :'row' , marginHorizontal : 20,}}>
            <Text>Difficult :</Text>
            <Text>Intermediate</Text>
        </View>
        <View style={{ justifyContent : 'space-between' , flexDirection :'row' , marginHorizontal : 20,}}>
            <Text>Commitment :</Text>
            <Text>2-5 days/week</Text>
        </View>



        <View>
            <Text style={{ fontSize :18, fontWeight : 'bold',margin : 10, marginTop : 40 }}>What you will do </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Leg-focused workouts</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Follow a daily workout schedule </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Use pre-designed exercise guides showing you each movement</Text>
            
        </View>

        <View>
            <Text style={{ fontSize :18, fontWeight : 'bold',margin : 10, marginTop : 40 }}>Equipment Needed </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Foam Roller</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Dumbbells/kettlebells (5-20 lbs) </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Mini Band</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Mat</Text>
        </View>

        <View>
            <Text style={{ fontSize :18, fontWeight : 'bold',margin : 10, marginTop : 40 }}>Sample List of exercise </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Air Squat</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Forward Lunge </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Use pre-designed exercise guides showing you each movement</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Leg-focused workouts</Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Follow a daily workout schedule </Text>
            <Text style={{ fontSize :18,marginHorizontal : 20}}> • Use pre-designed exercise guides showing you each movement</Text>
        </View>
        </View>
        
        <View style={{ width : '100%', height : 300 }}></View>
        </ScrollView>
        <View style={{ backgroundColor :COLORS.primary, height :50, width : '80%', marginHorizontal :'10%',  borderRadius : 15, alignItems :'center', position : 'absolute' , marginTop : 550, justifyContent :'center'}}>
            <Text style={{   fontWeight :'bold',  fontSize :18, color : '#FFF', }}>Try Plan for Free</Text>
        </View>
    </View>
   
 </ImageBackground>
    

    </View>
  )
}

export default PlanScreen

const styles = StyleSheet.create({
    picture : {
        height : 300,
        width : '100%'
    },
    Infor : {
        top : 260,
        borderRadius : 30,
        width : '100%',
        height : 3000,
        backgroundColor :'#fff'
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft :20
    }
})