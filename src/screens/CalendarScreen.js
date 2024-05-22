import React from "react";
import { StyleSheet, Text, TouchableOpacity, View , Image, ScrollView} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars"; // Correct import statement
import { COLORS } from "../constants";
import { ProgressChart} from "react-native-chart-kit";
import * as Progress from 'react-native-progress';
import ExerciseListItem from "../components/ExerciseListItem";
const chartData = {
    labels: ["a", "b", "c"], 
    data: [0.7, 0.4, 0.7],
   
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
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
const currentDate = new Date();
// Array of month names
const monthNames = [
'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];
// Extract day, month, and year
const currentDay = currentDate.getDate();
const currentMonth = monthNames[currentDate.getMonth()]; // Month is zero-based
const currentYear = currentDate.getFullYear();

const currentMonth1 = String(currentDate.getMonth() + 1).padStart(2, '0');

const currentDateString = `${currentYear}-${currentMonth1}-${currentDay}`;


const MyCalendar = () => { 
    
    return ( 
        <View> 
            <Calendar 
                markedDates={{ 
                    [currentDateString] : { selected: true }, 
                    '2023-06-24': { marked: true }, 
                    '2023-06-26': { 
                        marked: true, dotColor: 'red', 
                        activeOpacity: 0 
                    }, 
                }} 
                theme={{ 
                    backgroundColor: '#ffffff', 
                    calendarBackground: '#ffffff', 
                    textSectionTitleColor: '#b6c1cd', 
                    selectedDayBackgroundColor: '#00adf5', 
                    selectedDayTextColor: '#ffffff', 
                    todayTextColor: '#00adf5', 
                    dayTextColor: '#2d4150', 
                    textDisabledColor: '#d9e1e8', 
                    dotColor: '#00adf5', 
                    selectedDotColor: '#ffffff', 
                    arrowColor: '#00adf5', 
                    monthTextColor: '#00adf5', 
                    indicatorColor: 'blue', 
                    textDayFontSize: 16, 
                    textMonthFontSize: 16, 
                    textDayHeaderFontSize: 16,
                }} 
                style={{ width : 320, height : 360,  }}
            /> 
        </View> 
    ); 
}; 

const CalendarScreen = ({navigation}) => {

  return (
    <View>
      <View style={styles.header}>
        <View style={{ marginTop: 50, flexDirection: "row",  }}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={30}
              color="white"
              style={{ marginLeft: 5, justifyContent: "center", position : 'absolute' }}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>Calendar</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', shadowOpacity : 0.2, marginHorizontal : 10, marginBottom : 30, marginTop :20 }}>
        
      </View>
    <ScrollView style={{ width : '100%', height : '100%', top : '-4%', paddingVertical : '8%' }}>
      <View style={styles.containerCalender}>
      <MyCalendar /> 
      </View>
      <Text style={{ color : '#4F9AFE', fontSize : 24, marginTop : 30, marginHorizontal : "8%", top : '-3%', fontWeight : 'bold'  }}>{currentMonth} {currentDay}, {currentYear}</Text>
      <View style={styles.goalcontainer}>
      <View style={{ justifyContent :'center', flexDirection :'row' }}>
            <ProgressChart
                data={chartData}
                width={180}
                height={180}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={true}
            />

            <View>
            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"400" , marginLeft : -100,}}>Steps</Text>
            <Text style={{ color : '#737373', fontSize : 12,  marginLeft : 30}}>1000 </Text>
            <View style={{ flexDirection :'row', height : 30, width : '100%'}}>  
            <Image source={require('../assets/icon/step.png')} style={{ height : 30, width : 30, marginRight : 6 }} />          
            <Progress.Bar progress={20 / 100} width={100} height={16} borderRadius={7} color='#5BB6AF' style={{margin : 6}}/>
            </View>
            </View>


            <View style={{ justifyContent :'center', alignContent :'center', alignItems :'center' , paddingHorizontal : 10}}>
            <Text style={{ marginTop : 10, fontSize : 20, fontWeight :"400" , marginLeft : -100,}}>Calories </Text>
            <Text style={{ color : '#737373', fontSize : 12,  marginLeft : 30}}>Done </Text>
            <View style={{ flexDirection :'row', height : 30, width : '100%'}}>  
            <Image source={require('../assets/icon/calo.png')} style={{ height : 30, width : 30, marginRight : 6 }} />          
            <Progress.Bar progress={100 / 100} width={100} height={18} borderRadius={7} color='#F2B455' style={{margin : 6}}/>
            </View>
            </View>
            </View>
            </View>

      </View>
      <View style={styles.exercisecontainer}>
      <TouchableOpacity>
      <ExerciseListItem  item={{name : 'run', label: 'Run',hour:30, cal:150}} />
      </TouchableOpacity>

      <TouchableOpacity>
      <ExerciseListItem item={{name : 'bicycle', label: 'Bicycle',hour:1, cal:150}} />
      </TouchableOpacity>

      <TouchableOpacity>
      <ExerciseListItem  item={{name : 'walk',label: 'Walk',hour:2, cal:200}} />
      </TouchableOpacity>

      </View>
      
      </ScrollView>
    </View>
   
    
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
    header: {
    width : '100%',
    height :  110,
    backgroundColor : COLORS.primary,
    justifyContent: "center",
    alignItems: "center"
    },
    containerCalender: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#FFFFFF",
    marginHorizontal : "5%",
    borderRadius : 30
  },
  Text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: "30%",
    marginRight : 120
  },
    goalcontainer : {
      marginVertical : 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor : "#FFFFFF",
      marginHorizontal : "5%",
      borderRadius : 30
    },
    exercisecontainer : {
      marginVertical : 10,
      padding : '2%',
      backgroundColor : "#FFFFFF",
      marginHorizontal : "5%",
      borderRadius : 30
    }
});
