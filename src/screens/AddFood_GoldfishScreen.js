import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';

const AddFood_GoldfishScreen = () => {
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
      <Text style={styles.title1}>Goldfish</Text>
      <Text style={{ color: '#6A6A6A'}}>Pepperidge Farms</Text>
      </View>
      <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Serving Size</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary }}>1 bag</Text>
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
<View style={{ flexDirection : 'row',justifyContent :"space-between", padding:20}}>
      <View>
        <Text style={{ color: '#5BB6AF', fontSize: 13 }}>63%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>19g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>Carbs</Text>
     
        </View>
     </View>

     <View>
        <Text style={{ color: '#621788', fontSize: 13 }}>31%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>4.5g</Text>
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
          <View style={{ width : '35%', height : 35, justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary,fontSize: 16 }}>Show <AntDesign name="down" size={24} color="blue" /></Text>
              
          </View>
      </View>
    
      <View style= {{ width : '70%', marginHorizontal : '16%', alignItems : 'center', marginTop : 20 }}>
          <Text style={{ color : '#ADADAD', textAlign : "center" }}>Is this information incorrect?  <Text style={{ color : COLORS.primary }}>Report Food.</Text></Text>
          </View>
              
  </View>
</View>
  )
}

export default AddFood_GoldfishScreen

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