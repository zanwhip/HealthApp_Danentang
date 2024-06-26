import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../constants";

const LoginScreen2 = () => {
    const handleLogin = () => {
        // Handle login action
      };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={27}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.login}>Log In</Text>
      </View>
      <View style= {{ marginTop : 50 }}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
        />
        <TextInput
         secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          keyboardType="visible-password"
        />
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={{ color : 'white', fontSize : 16, fontWeight : 'bold' }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{ width : '100%', justifyContent : 'center', alignItems :'center' }}>
          <Text style={{ color : COLORS.primary,  marginTop : 20}}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={{ marginTop : 82 }}>
            <View style={{ flexDirection : 'row', height : 60, alignItems : 'center', justifyContent : 'center'}}>
                <View style={{ width : 120, height : 2, backgroundColor : '#888888', marginHorizontal : 20 }}></View>
                <Text style={{ color : '#888888' }}>OR</Text>
                <View style={{ width : 120, height : 2, backgroundColor : '#888888', marginHorizontal : 20 }}></View>
            </View>
        </View>
        <View style={{ marginTop : -20 }}>
        <TouchableOpacity style={styles.button1} >
          <Text style={{ color : '#ADADAD' }}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} >
          <Text style={{ color : '#ADADAD' }}>Continue with Facebook</Text>
        </TouchableOpacity>
        <View style= {{ width : '60%', marginHorizontal : '20%', alignItems : 'center', marginTop : 20 }}>
        <Text style={{ color : '#ADADAD', textAlign : "center" }}>We will never post anything without your permission.</Text>
        </View>
       
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center items vertically
    marginTop: 60,
    marginLeft: 20,
  },
  icon: {
    marginRight: 10, // Add space between icon and text
  },
  login: {
    // fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: "30%",
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius : 8,
    marginHorizontal : 29
    
  },
  button: {
    width: '85%',
    height: 47,
    backgroundColor: '#2A64E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal : '7.5%'
  },
  button1: {
    width: '85%',
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal : '7.5%',
    borderWidth : 0.2
  },

});
export default LoginScreen2;
