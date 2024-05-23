import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProgressChart} from "react-native-chart-kit";

const chartData = {
    labels: ["a", "b", "c"], 
    data: [0.7, 0.4, 0.7],
   
  };
  const chartConfig = {
    backgroundGradientFrom: "#EEE",
    backgroundGradientTo: "#EEE",
    color: (opacity = 1, index) => {
      const colors = ['#F2B455', '#5BB6AF', '#2A64E4'];
      if (typeof index !== 'undefined' && colors[index]) {
        return `rgba(${hexToRgb(colors[index])}, ${opacity})`;
      } else {
        // Trả về một màu mặc định nếu không có mã hex nào được tìm thấy
        return `rgba(255, 0, 0, ${opacity})`; // Màu đỏ mặc định
      }
    },
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    fillShadowGradient: "rgba(0, 255, 0, 0.5)",
    fillShadowGradientOpacity: 1,
  };
  // Function to convert hex color to RGB
  function hexToRgb(hex) {
    // Kiểm tra xem hex có tồn tại không
    if (!hex) return;
    // Remove '#' if present
    hex = hex.replace(/^#/, '');
    // Convert each 2 characters to base 16 and join them with ','
    return hex.match(/.{1,2}/g).map(val => parseInt(val, 16)).join(',');
  }
const AddExerciseScreen = ({navigation, route}) => {
  const { exercise } = route.params;
  return (
    <View>
      <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, width: '100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={36} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.title}>Add Exercise</Text>
    <TouchableOpacity onPress={() => navigation.navigate('ExerciseDailyDiary')}>
    <MaterialIcons name="done" size={36} color="#fff" />
    </TouchableOpacity>
  </View>
      </View>
     <View style={styles.Infor}>
        <View style={{ padding : 30,  }}>
        <Text style={styles.title1}>{exercise.typeExercise}</Text>
       <Text>Cardio</Text>
        </View>
        <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>
        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Exercise Duration</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: COLORS.primary }}>{exercise.Time} min</Text>
            </View>
        </View>
        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Exercise Intensity</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: '#F2B455'}}>{exercise.Intensity}</Text>
            </View>
        </View>

        <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
            <Text style={{ fontSize: 18 }}>Exercise Calories</Text>
            <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
                <Text style={{ color: COLORS.primary }}>{exercise.CaloriesExercise} Kcal</Text>
            </View>
        </View>
        {/* HIGHLIGHT */}
      <View style={{ backgroundColor: '#eee', width :'100%', height : '100%', borderRadius : 40, padding : 20, alignItems :'center'  }}>
        <Text style={{ fontSize : 22, color : '#505050' }}>HIGHLIGHT</Text>
        <View style={{ width : '100%', height :320, justifyContent :'space-between', flexDirection : 'row', paddingVertical : 10 }}>
            <View>
                <View style={{ width : 200, height : 80, backgroundColor : '#fff', borderRadius : 10, padding : 10, margin :  10  }}>
                    <Text style={{ color : COLORS.primary, fontSize : 35, fontWeight : '700' }}>70%</Text>
                    <Text style={{ fontSize : 15, color : '#545454' }}>of daily time goal</Text>
                </View>

                <View style={{ width : 200, height : 80, backgroundColor : '#fff', borderRadius : 10, padding : 10, margin :  10  }}>
                    <Text style={{ color : '#5BB6AF', fontSize : 35, fontWeight : '700' }}>40%</Text>
                    <Text style={{ fontSize : 15, color : '#545454' }}>of daily calorie goal</Text>
                </View>

                <View style={{ width : 200, height : 80, backgroundColor : '#fff', borderRadius : 10, padding : 10, margin :  10  }}>
                    <Text style={{ color : '#F2B455', fontSize : 35, fontWeight : '700' }}>40%</Text>
                    <Text style={{ fontSize : 15, color : '#545454' }}>of daily intensity goal</Text>
                </View>
            </View>
            <View style={{ justifyContent :'center',  }}>
            <ProgressChart
                data={chartData}
                width={180}
                height={180}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            </View>
      </View>
        <View style={{ width : '100%', height : 40, flexDirection : 'row', alignItems :'center', justifyContent: 'center' }}>
        <Text>You hit a 4 day run streak! </Text>
        <Image source={require('../assets/icon/run_yellow.png')} style={{ height : 60, width : 60 }} />
        </View>
    </View>
  </View>
</View>
  )
}

export default AddExerciseScreen

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