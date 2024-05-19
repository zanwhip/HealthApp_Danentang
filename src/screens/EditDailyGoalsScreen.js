import { ScrollView, StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const EditDailyGoalsScreen = ({ navigation }) => {
    const [aimSteps, setAimSteps] = useState("");
    const [aimCals, setAimCals] = useState("");
    const [aimExercises, setAimExercises] = useState("");
    const [caloriesPerStep, setCaloriesPerStep] = useState("");

    const route = useRoute();
    const { steps } = route.params;
    const CaloExercise = aimSteps*0.05;
    const percent_steps = (steps / (aimSteps || 1)) * 100;
    const percent_cals = (100 / (aimCals || 1)) * 100;
    const percent_exercises = (5 / (aimExercises || 1)) * 100;

    const handleStepsChange = (text) => {
        const parsedNumber = parseInt(text);
        setAimSteps(isNaN(parsedNumber) ? "" : parsedNumber);
        setCaloriesPerStep(isNaN(parsedNumber) || isNaN(aimCals) ? "" : parsedNumber * aimCals);
    };

    const handleCalsChange = (text) => {
        const parsedNumber = parseInt(text);
        setAimCals(isNaN(parsedNumber) ? "" : parsedNumber);
        setCaloriesPerStep(isNaN(parsedNumber) || isNaN(aimSteps) ? "" : aimSteps * parsedNumber);
    };

    const handleExercisesChange = (text) => {
        const parsedNumber = parseInt(text);
        setAimExercises(isNaN(parsedNumber) ? "" : parsedNumber);
    };

    const handleDonePress = () => {
        Keyboard.dismiss();
        navigation.navigate('ExerciseDailyDiary', { aimSteps });
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Ionicons name="arrow-back" size={36} color="#fff" />
                        <Text style={styles.title}>Daily Goals Details</Text>
                        <MaterialIcons name="done" size={36} color="#fff" onPress={handleDonePress} />
                    </View>
                </View>
                <View style={styles.infor}>
                    <View style={styles.section}>
                        <Text style={styles.title1}>Edit Goals</Text>
                        <Text>Steps, Cals, Exercises</Text>
                    </View>
                    <View style={styles.divider}></View>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Steps per day</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleStepsChange}
                                keyboardType="numeric"
                                value={aimSteps.toString()}
                                placeholder="Enter steps"
                                placeholderTextColor={COLORS.placeholder}
                            />
                        </View>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Calories per day</Text>
                        <View style={styles.inputContainer}>
                           <Text>{CaloExercise}</Text>
                        </View>
                    </View>

                    <View style={styles.inputRow}>
                        <Text style={styles.label}>Exercises per day</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleExercisesChange}
                                keyboardType="numeric"
                                value={aimExercises.toString()}
                                placeholder="Enter exercises"
                                placeholderTextColor={COLORS.placeholder}
                            />
                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.section}>
                        <Text style={styles.title1}>Percent of Daily Goals</Text>
                        <View style={styles.progressContainer}>
                            <View style={styles.progressItem}>
                                <Progress.Bar progress={steps / (aimSteps || 1)} width={100} color='#5BB6AF' style={styles.progressBar} />
                                <Text>{percent_steps.toFixed(2)}%</Text>
                                <Text style={styles.progressLabel}>Steps</Text>
                            </View>

                            <View style={styles.progressItem}>
                                <Progress.Bar progress={100 / (aimCals || 1)} width={100} color='#F2B455' style={styles.progressBar} />
                                <Text>{percent_cals.toFixed(2)}%</Text>
                                <Text style={styles.progressLabel}>Cals</Text>
                            </View>

                            <View style={styles.progressItem}>
                                <Progress.Bar progress={5 / (aimExercises || 1)} width={100} color='#B50036' style={styles.progressBar} />
                                <Text>{percent_exercises.toFixed(2)}%</Text>
                                <Text style={styles.progressLabel}>Exercises</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.reportContainer}>
                        <Text style={styles.reportText}>Is this information incorrect? <Text style={styles.reportLink}>Report Food.</Text></Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default EditDailyGoalsScreen;

const styles = StyleSheet.create({
    infor: {
        top: -20,
        borderRadius: 30,
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff',
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    header: {
        height: 130,
        width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: "center"
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width: '100%'
    },
    section: {
        padding: 30,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#D0D0D0',
        marginVertical: 10,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 20,
        alignItems: "center"
    },
    label: {
        fontSize: 18,
    },
    inputContainer: {
        width: '35%',
        height: 35,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    input: {
        color: COLORS.primary,
        width: '100%',
    },
    progressContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    progressItem: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    progressBar: {
        marginBottom: 20,
    },
    progressLabel: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "700",
    },
    reportContainer: {
        width: "100%",
        height: '100%',
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        padding: 20,
    },
    reportText: {
        color: '#7E7E7E',
    },
    reportLink: {
        color: "#2A64E4",
    },
});
