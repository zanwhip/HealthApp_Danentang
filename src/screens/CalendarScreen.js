import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars"; // Correct import statement
import { COLORS } from "../constants";
import CustomSwitch from "../components/CustomSwitch";


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
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Food'}
          option2={'Exercise'}
          selectionColor={COLORS.primary}
        />
      </View>
      <View style={styles.containerCalender}>
      <MyCalendar /> 
      </View>
      <Text style={{ color : '#4F9AFE', fontSize : 30, marginTop : 30, marginHorizontal : "8%"  }}>{currentMonth} {currentDay}, {currentYear}</Text>
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
});
