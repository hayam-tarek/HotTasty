import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../middlewere/firebase';


export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [birthdate, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    // const [username, setUsername] = useState("");
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed Up 
                handleSetData();
                console.log('Signed Up Successfully')
                const user = userCredential.user;
                navigation.navigate("SignIN")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
        const handleSetData = async () => {
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                phone: phone
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
        };
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>

            <Text style={styles.text}>SignUp With Us</Text>
            <StatusBar style="auto" />
            <View style={styles.inputView1}>
                <TextInput style={styles.inputText}
                    placeholder="FirstName"
                    placeholderTextColor="#003f5c"
                    onChangeText={firstname => setFirst(firstname)}
                />
            </View>
            <View style={styles.inputView2}>
                <TextInput style={styles.inputText}
                    placeholder="LastName"
                    placeholderTextColor="#003f5c"
                    onChangeText={lastname => setLast(lastname)}
                />
            </View>

            <View style={styles.inputView3}>
                <TextInput style={styles.inputText}
                    placeholder="BirthDate"
                    placeholderTextColor="#003f5c"
                    onChangeText={birthdate => setBirth(birthdate)}
                />
            </View>
            <View style={styles.inputView4}>
                <TextInput style={styles.inputText}
                    placeholder="PhoneNumber"
                    placeholderTextColor="#003f5c"
                    onChangeText={phone => setPhone(phone)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.SignUpbtn} onPress={handleSignUp}>
                <Text style={styles.SignUpText}>SignUp</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.Backbtn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.SignUpText}>Go Home</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'indigo',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'darkorange',
        fontSize: 30,
        padding: 30
    },
    image: {
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    SignUpbtn: {
        width: "35%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 190,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    Backbtn: {
        width: "35%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -190,
        marginTop: -70,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    inputView: {
        width: "70%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView1: {
        width: "70%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView2: {
        width: "70%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView3: {
        width: "70%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView4: {
        width: "70%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 50,
        color: "white"
    },
    SignUpText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});