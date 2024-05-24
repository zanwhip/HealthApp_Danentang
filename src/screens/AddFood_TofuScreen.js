// Thiếu chart
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
const AddFood_TofuScreen = ({navigation}) => {
  return (
    <View>
    <View style={styles.header}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, width: '100%'}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={36} color="#fff" />
    </TouchableOpacity>
  <Text style={styles.title}>Food Details</Text>
  <MaterialIcons name="done" size={36} color="#fff" />
</View>
    </View>
   <View style={styles.Infor}>
      <View style={{ padding : 30,  }}>
      <Text style={styles.title1}>Extra Firm Tofu</Text>
      <Text style={{ color: '#6A6A6A'}}>Nasoya</Text>
      </View>
      <View style={{ width: '100%', height : 2, backgroundColor : '#D0D0D0' }}></View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Serving Size</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary }}>1 gram</Text>
          </View>
      </View>

      <View style={{ flexDirection : 'row', justifyContent :"space-between", padding : 20, alignItems :"center" }}>
          <Text style={{ fontSize: 18 }}>Number of Servings</Text>
          <View style={{ width : '35%', height : 35, borderRadius : 5, borderColor : '#000', borderWidth : 1 , justifyContent :'space-evenly', alignItems:"flex-end", padding : 5 }}>
              <Text style={{ color: COLORS.primary}}>225</Text>
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
        <Text style={{ color: '#5BB6AF', fontSize: 13 }}>13%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>5g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>Carbs</Text>
     
        </View>
     </View>

     <View>
        <Text style={{ color: '#621788', fontSize: 13 }}>32%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>12g</Text>
        <View style={{ flexDirection : 'row'}}>
        <Text style={{ color: '#000000',fontSize: 15}}>fat</Text>
     
        </View>
     </View>

     <View>
        <Text style={{ color: '#F2B455', fontSize: 13 }}>55%</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 15  }}>21g</Text>
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
              <Text style={{ color: COLORS.primary,fontSize: 16 }}>Show <AntDesign name="down" size={22} color="blue" /></Text>
          </View>
      </View>
    
      <View style= {{ width : '80%', marginHorizontal : '10%', alignItems : 'center', marginTop : 20 }}>
          <Text style={{ color : '#ADADAD', textAlign : "center" }}>Is this information incorrect?  <Text style={{ color : COLORS.primary }}>Report Food.</Text></Text>
          </View>
              
  </View>
</View>
  )
}

export default AddFood_TofuScreen

const styles = StyleSheet.create({
    Infor : {
        top : -20,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
       
        width : '100%',
        height : 490,
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