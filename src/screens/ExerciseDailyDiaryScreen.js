import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProgressChart} from "react-native-chart-kit";
import * as Progress from 'react-native-progress';
const steps = 60;
const cals = 100;
const exercises = 40;
  
const chartData = {
    labels: ["", "", "c"], 
    data: [,, 0.7],
   
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Đỏ
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    fillShadowGradient: "rgba(0, 255, 0, 0.5)",
    fillShadowGradientOpacity: 1,
  };

   
  
const ExerciseDailyDiaryScreen = ({navigation}) => {

    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center',  padding: 20, width: '100%'}}>
      <Feather name="credit-card" size={30} color="#fff" />
    <Text style={styles.title}>Today</Text>
    
  </View>
</View>
    <ScrollView>
      <View style={{ width :'100%', height : 40, alignItems :'center' }}>
      <View style={styles.type}>
        <TouchableOpacity style={{ marginHorizontal : 10, width : '40%', justifyContent: 'center', height : 30, alignItems :'center' }} onPress={() => navigation.navigate('DiaryFoodScreen')}>
            <Text style={{ color: COLORS.primary }}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal : 10, width : '50%', justifyContent: 'center', height : 30, alignItems :'center', backgroundColor : COLORS.primary , borderRadius : 15}} >
            <Text style={{ color: '#fff' }}>Exercise</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.statistic}>
        <View style={{ flexDirection :'row' }}>
        <Text style={styles.title1}>Daily Goals</Text>
        <FontAwesome name="pencil" size={26} color={COLORS.primary} style={{ left : 90}} />
        </View>
       
        <View style={{ flexDirection : 'row'}}>
            <View style={{ justifyContent : 'center', marginTop : 40 }}>
            <ProgressChart
                data={chartData}
                width={180}
                height={200}
                strokeWidth={26}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            <View style={{ bottom : 120,  alignItems : 'center' }}>
            <Text style={{ fontSize : 16 }}>Total : </Text>
            <Text style={{ fontSize : 26, fontWeight : 'bold',  }}>50%</Text>
            </View>
           
            </View>
            <View style={{ right : -10 }}>
                <Text style={{ marginLeft : 80, fontWeight : 'bold' }}>Daily Goals</Text>
            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"400" , marginLeft : -100,}}>Steps</Text>
            <Text style={{ color : '#737373', fontSize : 12,  marginLeft : 30}}>6,459/10,000 </Text>
            <View style={{ flexDirection :'row', height : 30, width : '100%'}}>  
            <Image source={require('../assets/icon/step.png')} style={{ height : 30, width : 30, marginRight : 6 }} />          
            <Progress.Bar progress={steps / 100} width={120} height={18} borderRadius={7} color='#5BB6AF' style={{margin : 6}}/>
            </View>
            </View>


            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"400" , marginLeft : -100,}}>Calories </Text>
            <Text style={{ color : '#737373', fontSize : 12,  marginLeft : 30}}>Done </Text>
            <View style={{ flexDirection :'row', height : 30, width : '100%'}}>  
            <Image source={require('../assets/icon/calo.png')} style={{ height : 30, width : 30, marginRight : 6 }} />          
            <Progress.Bar progress={100 / 100} width={120} height={18} borderRadius={7} color='#F2B455' style={{margin : 6}}/>
            </View>
            </View>


            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"400" , marginLeft : -100,}}>Steps</Text>
            <Text style={{ color : '#737373', fontSize : 12,  marginLeft : 30}}>2/5 </Text>
            <View style={{ flexDirection :'row', height : 30, width : '100%'}}>  
            <Image source={require('../assets/icon/routine.png')} style={{ height : 30, width : 30, marginRight : 6 }} />          
            <Progress.Bar progress={40 / 100} width={120} height={18} borderRadius={7} color='#B50036' style={{margin : 6}}/>
            </View>
            </View>

        </View>
        </View>
        
    </View>
    <View style={styles.statistic}>
        <View style={{ height : 50, width : '100%', marginHorizontal : 20, backgroundColor : '#F6F5F5', borderRadius : 10, flexDirection : 'row'}}>
           <View style={{ width : '50%', alignItems : 'center', justifyContent : 'center', backgroundColor : COLORS.primary, borderRadius : 10 }}>
           <Text>Workouts</Text>
           </View>
          <View style={{ width : '50%', alignItems : 'center', justifyContent : 'center' }}>
          <Text>Weight</Text>
          </View>
           
        </View>

        <View style={{ height : 70, width : '100%', marginHorizontal : 20, backgroundColor : '#F6F5F5', borderRadius : 10, flexDirection : 'row', marginTop : 12, justifyContent : 'space-between', paddingHorizontal : 20, alignItems:'center'}}>
        <Image source={require('../assets/icon/dance.png')} style={{ height : 50, width : 50, marginRight : 6 }} />     
        <View style={{ left : -60 }}>
            <Text style={{ fontSize : 18,  }}>Dance</Text>
            <Text style={{ color : '#737373' }}>1 hr</Text>
        </View>
        <Image source={require('../assets/icon/start.png')} style={{ height : 50, width : 50, marginRight : 6 }} />     
        </View>
        
        <View style={{ height : 70, width : '100%', marginHorizontal : 20, backgroundColor : '#F6F5F5', borderRadius : 10, flexDirection : 'row', marginTop : 12, justifyContent : 'space-between', paddingHorizontal : 20, alignItems:'center'}}>
        <Image source={require('../assets/icon/run.png')} style={{ height : 50, width : 50, marginRight : 6 }} />     
        <View style={{ left : -40 }}>
            <Text style={{ fontSize : 18,  }}>Dance</Text>
            <Text style={{ color : '#737373' }}>1 hr</Text>
        </View>
        <View style={{  }}>
            <Text style={{ fontSize : 32,  }}>25%</Text>
            <Text style={{ color : '#737373' }}>of daily goal</Text>
        </View>
        </View>
        
        <View style={{ height : 70, width : '100%', marginHorizontal : 20, backgroundColor : '#F6F5F5', borderRadius : 10, flexDirection : 'row', marginTop : 12, justifyContent : 'space-between', paddingHorizontal : 20, alignItems:'center'}}>
        <Image source={require('../assets/icon/run.png')} style={{ height : 50, width : 50, marginRight : 6 }} />     
        <View style={{ left : -40 }}>
            <Text style={{ fontSize : 18,  }}>Dance</Text>
            <Text style={{ color : '#737373' }}>1 hr</Text>
        </View>
        <View style={{  }}>
            <Text style={{ fontSize : 32,  }}>25%</Text>
            <Text style={{ color : '#737373' }}>of daily goal</Text>
        </View>
        </View>
    </View>
      </View>

      

      </ScrollView>
    
  </View>
  )
}

export default ExerciseDailyDiaryScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#eee',
        flex : 1,
        
    },
   
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        color :'#fff',
        marginLeft : '32%',
       
    },
    title1 : {
        fontSize : 20,
        fontWeight : 'bold',
         color :'#000',

    },
    header : {
        height : 90,
        width : '100%',
        backgroundColor : COLORS.primary,
        //justifyContent :"center",
       paddingTop : 20,
    },
    type :{
     width :'50%', 
     height : 30, 
     margin : 20, 
     alignItems :'center', 
     backgroundColor : '#fff', 
     borderRadius : 15, 
    flexDirection : 'row',
    
      },
      statistic : { 
        width : '90%',
        height : 310,
        backgroundColor : '#fff', 
        margin  : 10,
        borderRadius : 15,
        alignItems :'center',
        padding : 10,
        paddingHorizontal : 20,
      },
     
})