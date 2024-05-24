import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import supabase from "../config/database";
import { useRoute } from "@react-navigation/native";

// Hàm chuyển đổi ngày thành chuỗi định dạng
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}/${year}`; // Định dạng: dd/mm/yyyy
};
const UserInformationScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const data = route.params;

  const handleSignup = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.from("User").insert({
        IdUser: data.user.id,
        Name: name,
        Gender: value,
        Email: data.user.email,
        Height: height,
        Weight: weight,
        DateOfBirth: date,
        BMI: (weight*1000) / (height * height),
      });
      if (error == null) {
        navigation.navigate("BottomTabNavigation");
      }
    } catch (error) {
      console.log(">>> Error while Creating User : ",error);
    } finally {
      setLoading(false);
    }
  };
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const dataGender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  // Bổ sung state mới để lưu trữ ngày hiện tại
  const [currentDateText, setCurrentDateText] = useState(
    formatDate(new Date())
  ); // Sử dụng formatDate để hiển thị ngày đúng định dạng

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
        <Text style={styles.infor}>Create A Health Profile</Text>
      </View>

      <View style={{ alignItems: "center", marginVertical: 22 }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/img/user.jpg")}
            style={{
              height: 90,
              width: 90,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: COLORS.white,
            }}
          />
          <View
            style={{ position: "absolute", bottom: 0, right: 10, zIndex: 9999 }}
          >
            <AntDesign name="camerao" size={32} color={COLORS.primary} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Gender</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataGender}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select gender"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => setValue(item.value)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
          </View>

          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </View>
          {/* <Text style={styles.label}>Weight (kg)</Text>
        <TextInput style={[styles.input]} keyboardType="numeric" /> */}
        </View>
        <Text style={styles.label}>Date of birth</Text>
        <View style={styles.dateInput}>
          <AntDesign
            name="calendar"
            size={24}
            color="black"
            style={styles.calendarIcon}
            onPress={() => setOpen(true)}
          />
          {open && (
            <DateTimePicker
              mode="date"
              display="default"
              value={date}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || date;
                setOpen(false);
                setDate(currentDate);
                setCurrentDateText(formatDate(currentDate));
              }}
            />
          )}

          <Text style={styles.label}>{currentDateText}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          {loading ? "Loading..." : "Create Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  infor: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: "20%",
    marginLeft: 22,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 29,
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 29,
  },
  calendarIcon: {
    marginLeft: "auto",
    position: "absolute",
    padding: 10,
  },
  button: {
    width: "85%",
    height: 47,
    backgroundColor: "#2A64E4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: "7.5%",
  },
  label: {
    marginLeft: 29,
    color: "#B0B3C7",
    fontWeight: "bold",
  },
  dropdown: {
    width: 360,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 29,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#B0B3C7",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default UserInformationScreen;
