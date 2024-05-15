import { ScrollView, StyleSheet, Text, View,Image , TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

  
const ProfileFoodScreen = ({navigation}) => {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    const onPressContainer = () => {
      // Toggle visibility of circles
      setIsVisible1(!isVisible1);
      setIsVisible2(!isVisible2);
      setIsVisible3(!isVisible3);
    };
    
  return (
    <View style={styles.container}>
    <View style={styles.header}>
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, width: '100%' }}>
    <Image source={require('../assets/img/user.jpg')} style={{ height: 70, width: 70, borderRadius: 35 }} />
    <View style={{ flex: 1, marginLeft: 20 }}>
      <Text style={styles.user}>John Smith</Text>
      <Text style={styles.userdes}>Streak: X days</Text>
      <Text style={styles.userdes}>Progress: X lbs lost</Text>
    </View>

    <View style={{ alignItems: 'flex-end' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent :'space-between', width :80 }}>
        <Feather name="bell" size={28} color="white" />
        <AntDesign name="setting" size={28} color="white" />
      </View>
      <View style={{ marginTop: 10, height: 20, width: 80, backgroundColor: '#fff', alignItems: 'center', borderRadius: 10 }}>
        <Text>Friends</Text>
      </View>
    </View>
  </View>
</View>

    <ScrollView>
      <View style={{ width :'100%', height : 60, alignItems :'center' }}>
      <View style={styles.type}>
        <View style={{  width : '30%', justifyContent: 'center', height : 30, alignItems :'center' }}>
            <Text style={{ color: COLORS.primary }}>My goal</Text>
        </View>
        <View style={{  width : '40%', justifyContent: 'center', height : 30, alignItems :'center', backgroundColor : COLORS.primary , borderRadius : 15}}>
            <Text style={{ color: '#fff' }}>Foods</Text>
        </View>
        <View style={{  width : '30%', justifyContent: 'center', height : 30, alignItems :'center' }}>
            <Text style={{ color: COLORS.primary }}>Workouts    </Text>
        </View>
    </View>
    </View>
      {/* Recipes */}
      <View style={{ marginLeft : 20, marginBottom : 20}}>
        
        <Text style={styles.title1}>Recipes</Text>
   
        <ScrollView horizontal={true}>
            <View style={styles.box}>
            <Image source={require('../assets/img/anh11.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Soup</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
          

            <View style={styles.box}>
            <Image source={require('../assets/img/anh12.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Hash browns</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>


            <View style={styles.box}>
            <Image source={require('../assets/img/anh13.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Tacos</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
        </ScrollView>
    
       
      </View>

    {/* Meals */}
      <View style={{ marginLeft : 20, marginBottom : 20}}>
        <Text style={styles.title1}>Meals</Text>
   
        <ScrollView horizontal={true}>
            <View style={styles.box}>
            <Image source={require('../assets/img/anh21.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Breakfast 1</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
          

            <View style={styles.box}>
            <Image source={require('../assets/img/anh22.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Mexican Dinner</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>


            <View style={styles.box}>
            <Image source={require('../assets/img/anh23.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Monday Lunch</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
        </ScrollView>
    
       
      </View>

    {/* Food */}
      <View style={{ marginLeft : 20, marginBottom : 20}}>
        <Text style={styles.title1}>Foods</Text>
   
        <ScrollView horizontal={true}>
            <View style={styles.box}>
            <Image source={require('../assets/img/anh31.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Orange</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>45 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
          

            <View style={styles.box}>
            <Image source={require('../assets/img/anh32.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>PB&J </Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>390 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>


            <View style={styles.box}>
            <Image source={require('../assets/img/anh33.png')} style={{ height : 100, width : 170}} />
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Chocolate muffin</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
        </ScrollView>
    
       
      </View>


      <View style={{ marginLeft : 20, marginBottom : 20}}>
        <View style={{ flexDirection : 'row', width : '70%', justifyContent :'space-between' }}>
        <Text style={styles.title1}>Recommended Recipes</Text>
        <FontAwesome5 name="crown" size={20} color="black" />
        </View>
        <ScrollView horizontal={true}>
            <View style={styles.box}>
            <View style={{ height : 100, width : 170, backgroundColor : '#B9B9B9', borderTopLeftRadius : 10,  borderTopRightRadius : 10}}></View>
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Soup</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
          

            <View style={styles.box}>
            <View style={{ height : 100, width : 170, backgroundColor : '#B9B9B9', borderTopLeftRadius : 10,  borderTopRightRadius : 10}}></View>
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Hash browns</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>


            <View style={styles.box}>
            <View style={{ height : 100, width : 170, backgroundColor : '#B9B9B9', borderTopLeftRadius : 10,  borderTopRightRadius : 10}}></View>
            <View style={styles.description}>
                <View>
                    <Text style={{ fontSize : 14, fontWeight : '700' }}>Tacos</Text>
                    <Text style={{ fontSize : 12, fontWeight : '400' }}>495 calories</Text>
                </View>
                <AntDesign name="pluscircle" size={28} color={COLORS.primary} />
            </View>
            </View>
        </ScrollView>
    
       
      </View>

      </ScrollView>
    
      {/* Bottom tab */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconTab}  onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="view-dashboard-outline" size={36} color={
                                 COLORS.unfocus
                                  
                            } />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconTab} >
        <MaterialIcons name="explore" size={36}
                                color={COLORS.unfocus}
                            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconTab}>
       
       </TouchableOpacity>

        <TouchableOpacity style={styles.iconTab} onPress={() => navigation.navigate('DiaryFood')}>
        <MaterialIcons name="history" size={36} 
                                color={COLORS.unfocus}
                            />
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.iconTab} onPress={() => navigation.navigate('Profile')}>
        <AntDesign name="user" size={36}
                                color={COLORS.focus}
                            />
        </TouchableOpacity>
      </View>
      {/* Circle */}
      <TouchableOpacity onPress={onPressContainer}>
        <View
          style={styles.centerCircle}
        >
          
        </View>
      </TouchableOpacity>
      {isVisible1 && (
        <View style={[styles.circle, { bottom: 90, left: '27%' }]}>
         
        </View>
      )}
      {isVisible2 && (
        <View style={[styles.circle, { bottom: 130, left: '44%' }]}>
      
        </View>
      )}
      {isVisible3 && (
        <View style={[styles.circle, { bottom: 90, left: '60%' }]}>
       
        </View>
      )}
    </View>
 
  )
}

export default ProfileFoodScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#eee',
        flex : 1,
        
    },
   
    user : {
        fontSize : 24,
        fontWeight : 'bold',
        color :'#fff',
        
       
    },
    userdes : {
        fontSize : 14,
        fontWeight : '400',
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
        //justifyContent :"center",
       paddingTop : 20,
    },
    type :{
     width :'80%', 
     height : 30, 
     margin : 20, 
     alignItems :'center', 
     backgroundColor : '#fff', 
     borderRadius : 15, 
    flexDirection : 'row',
      },

      box : {
        width : 170, 
        height : 160,
        marginRight : 10,
      },

      description : { 
        width: '100%', 
        height : 50, 
        backgroundColor : '#fff', 
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10, 
        flexDirection : 'row', 
        paddingHorizontal : 10, 
        justifyContent : 'space-between', 
        alignItems :'center' },
        
  // Bottom tab css
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row', 
    height: 80,
    width : '100%',
    backgroundColor: COLORS.primary,

  },
  centerCircle : {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: COLORS.primary,
    bottom: 40,
    borderColor: '#fff',
    borderWidth: 10,
    borderRadius: 40,
    marginHorizontal : '41%',
    

  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary, // Change the color as needed
    position: 'absolute',
  },
  iconTab : { 
    width : '20%', 
    height : 80, 
    backgroundColor :COLORS.primary, 
    justifyContent : 'center', 
    alignItems : 'center' }

     
     
})