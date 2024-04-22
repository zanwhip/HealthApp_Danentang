import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { ProgressChart} from "react-native-chart-kit";
import * as Progress from 'react-native-progress';

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

const AddFood_AcaiScreen = () => {
  return (
    <View>
    <View style={styles.header}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, width: '100%'}}>
  <Ionicons name="arrow-back" size={36} color="#fff" />
  <Text style={styles.title}>Food Details</Text>
  <MaterialIcons name="done" size={36} color="#fff" />
</View>
    </View>
   <View style={styles.Infor}>
      <View style={{ padding : 30,  }}>
      <Text style={styles.title1}>Acai Bowl</Text>
      <Text style={{ color: '#6A6A6A'}}>Organic Foods</Text>
      </View>
      <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Serving Size</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary }}>1 bowl</Text>
          </View>
      </View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Number of Servings</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary}}>1</Text>
          </View>
      </View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Meal</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary }}>Breakfast</Text>
          </View>
      </View>
      
{/* MAP */}
<View style={{ flexDirection : 'row',justifyContent :"space-between", padding:10}}>
    
<View style={{ justifyContent : 'center'}}>
            <ProgressChart
                data={chartData}
                width={150}
                height={130}
                strokeWidth={25}
                radius={27}
                chartConfig={chartConfig}
                hideLegend={true}
            />
            <View style={{ bottom : 110,  alignItems : 'center' }}>
            <Text style={{ fontSize : 16 }}>Total : </Text>
            <Text style={{ fontSize : 26, fontWeight : 'bold',  }}>180 cal</Text>
            </View>
           
            </View>
      <View>
        <Text style={{ color: '#5BB6AF', fontSize: 13 }}>58%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>29g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>Carbs</Text>
     
        </View>
     </View>

     <View>
        <Text style={{ color: '#621788', fontSize: 13 }}>36%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>8g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>fat</Text>
     
        </View>
     </View>

     <View>
        <Text style={{ color: '#F2B455', fontSize: 13 }}>6%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>3g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>protein</Text>
     
        </View>
     </View>
</View>
{/* LINE */}
<View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>
<View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 16 }}>Nutrition Facts</Text>
          <View style={{ width : '35%', height : 35, justifyContent :'space-evenly', alignItems:"flex-end" }}>
              <Text style={{ color: COLORS.primary,fontSize: 16 }}>Show  <AntDesign name="down" size={20} color="blue" /></Text>
             
          </View>
         
      </View>
    
      <View style= {{ width : '70%', marginHorizontal : '16%', alignItems : 'center', marginTop : 20 }}>
          <Text style={{ color : '#ADADAD', textAlign : "center" }}>Is this information incorrect?  <Text style={{ color : COLORS.primary }}>Report Food.</Text></Text>
          </View>

              
  </View>
</View>
  )
}

export default AddFood_AcaiScreen

const styles = StyleSheet.create({
    Infor : {
        top : -20,
        borderRadius : 30,
        width : '100%',
        height : 480,
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