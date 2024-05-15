import { View, Text,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import Header from '../components/header'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ExploreScreen = ({navigation}) => {
  
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
      <Header />
      <View style={styles.search}>
      <EvilIcons name="search" size={24} color="black" />

        <Text>Search</Text>
        <Entypo name="list" size={24} color="black" />
      </View>

    <ScrollView style ={{ top : -30 }}>
      <View style={{ paddingHorizontal : 15,  }}>
        <Text>Suggested</Text>
        <View style={{ flexDirection : 'row' }}>
        <View style={styles.suggestedaround}>
          <Text style={styles.suggestText}>Cardio</Text>
        </View>

        <View style={styles.suggestedaround}>
          <Text style={styles.suggestText}>Cardio</Text>
        </View>

        <View style={styles.suggestedaround}>
          <Text style={styles.suggestText}>Cardio</Text>
        </View>
        </View>
        
        </View>

        {/* Active Plan */}
        <View style={{ marginHorizontal : 10 }}>
        <Text style={{ marginTop : 20,fontWeight :'bold', fontSize :18,}}>ACTIVE PLAN</Text>
        <ImageBackground source={require('../assets/img/exercise.png')} style={styles.banner1} >
    <View>
      <Text style={styles.text1}>High Protein</Text>
      <Text style={styles.text}>28 days • Beginner • Daily</Text>
    </View>
    <View style={{ flexDirection : 'row' }}>
    <View style={styles.statistic}>
      <Text style={{ fontWeight : '400', color :'#FFF',paddingBottom : 5  }}>Caloric Intake</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>1,300kcal</Text>
    </View>
    <View style={styles.statistic}>
      <Text style={{ fontWeight : '400', color :'#FFF', paddingBottom : 5 }}>Progress</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>45%</Text>
    </View>
    </View>
  </ImageBackground>
  </View>


{/* Popular */}
<Text style={{ marginTop : 20,fontWeight :'bold', fontSize :18,margin : 10}}>POPULAR</Text>
<ScrollView horizontal={true} style={{ marginHorizontal: 10 }}>
        <ImageBackground source={require('../assets/img/HighProtein.png')} style={styles.banner2} >
    <View style={{ flexDirection :'column',  }}>
      <Text style={styles.text1}>Strong Glutes & Thighs</Text>
      <Text style={styles.text}>28 days • Intermediate • 2-4 days</Text>
    </View>
    <View style={{ flexDirection : 'row' }}>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF',paddingBottom : 5  }}>Caloric goal</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>600kcal</Text>
    </View>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF', paddingBottom : 5 }}>Total exercises</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>10</Text>
    </View>
    </View>
  </ImageBackground>

  <ImageBackground source={require('../assets/img/HighProtein.png')} style={styles.banner2} >
    <View style={{ flexDirection : 'column',  }}>
      <Text style={styles.text1}>Beginner HIIT</Text>
      <Text style={styles.text}>28 days • Beginner • 2-4 days</Text>
    </View>
    <View style={{ flexDirection : 'row' }}>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF',paddingBottom : 5  }}>Caloric goal</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>400kcal</Text>
    </View>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF', paddingBottom : 5 }}>Total exercises</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>10</Text>
    </View>
    </View>
  </ImageBackground>
  </ScrollView>
        
     
      

      {/* DIET */}
<Text style={{ marginTop : 20,fontWeight :'bold', fontSize :18,margin : 10}}>DIET</Text>
<ScrollView horizontal={true} style={{ marginHorizontal: 10 }}>
        <ImageBackground source={require('../assets/img/HighProtein.png')} style={styles.banner2} >
    <View style={{ flexDirection :'column',  }}>
      <Text style={styles.text1}>Low carb</Text>
      <Text style={styles.text}>28 days • Begginer • Daily</Text>
    </View>
    <View style={{ flexDirection : 'row' }}>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF',paddingBottom : 5  }}>Caloric goal</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>1200</Text>
    </View>
    
    </View>
  </ImageBackground>

  <ImageBackground source={require('../assets/img/HighProtein.png')} style={styles.banner2} >
    <View style={{ flexDirection : 'column',  }}>
      <Text style={styles.text1}>Beginner HIIT</Text>
      <Text style={styles.text}>14 days • Beginner • Daily</Text>
    </View>
    <View style={{ flexDirection : 'row' }}>
    <View style={styles.statistic1}>
      <Text style={{ fontWeight : '400', color :'#FFF',paddingBottom : 5  }}>Caloric goal</Text>
      <Text style={{ fontWeight : 'bold', color :'#FFF', fontSize: 20 }}>Varies</Text>
    </View>
   
    </View>
  </ImageBackground>
  </ScrollView>
      

      <View style={{ flexDirection :'row' }}>
        <Text style={{ marginTop : 20,fontWeight :'bold', fontSize :18,margin : 10}}>WORKOUTS </Text>
      </View>
      <View style={{ flexDirection :'row', margin : 10 }}>

      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>Cardio</Text>
      </View>
      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>Yoga</Text>
      </View>
      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>Strength</Text>
      </View>
      
      </View>

      <View style={{ flexDirection :'row', margin : 10 }}>

      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>Pilates</Text>
      </View>
      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>HIT</Text>
      </View>
      <View style={styles.subject}>
        <Text style={{ fontSize : 16, fontWeight :'700' }}>See all</Text>
      </View>
      
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
                                color={COLORS.focus}
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
                                color={COLORS.unfocus}
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

export default ExploreScreen
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.background,

  },
  search : {
    height : 50,
    width : '80%',
    backgroundColor : '#FFF',
    top :  - 60,
    justifyContent : 'space-between',
    alignItems : 'center',
    marginHorizontal : '10%',
    borderRadius : 250,
    flexDirection  : 'row',
    padding : 10,

  },
  suggestedaround : {
    borderRadius : 15,
    height : 30, 
    width : 80, 
    borderWidth : 1,
    borderColor : COLORS.primary,
    justifyContent :'center',
    alignItems :'center',
    marginRight : 10,
    marginTop : 10, 
  }, 
  suggestText : {
    color : COLORS.primary
  },
  banner1 : {
    height : 300,
    width : 390 ,
    justifyContent : 'flex-end',
    padding: 10,
    
  },
  banner2 : {
    height : 250,
    width : 320 ,
    justifyContent : 'flex-end',
    padding: 10,
    marginRight: 20
    
  },
  text : {
    marginTop : 20,
     fontWeight :'400', 
     fontSize :15,
     color : '#FFF'
  },
  text1 : {
    marginTop : 20,
     fontWeight :'bold', 
     fontSize :18,
     color : '#FFF'
  },
  statistic : {
    backgroundColor : COLORS.primary, 
    height : 80, 
    width : 150,  
    borderRadius : 20,
    padding : 20,
    marginVertical : 10, 
    marginRight : 20 
  },
  statistic1 : {
    backgroundColor : COLORS.primary, 
    height : 70, 
    width : 140,  
    borderRadius : 20,
    padding : 20,
    marginVertical : 10, 
    marginRight : 20 ,
    justifyContent :'center',
    alignContent :'center'
  },
  subject : {
    backgroundColor :COLORS.gray,
    height : 60, 
    width : 120, 
    borderRadius : 10,  
    alignItems : 'center' , 
    justifyContent :'center', 
    marginRight : 20,  
  },
  
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
}
)