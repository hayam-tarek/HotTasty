import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../middlewere/firebase';


export default function SignUp({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);

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
                console.log('Signed Up Successfully')
                const user = userCredential.user;
                handleSetData();
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
            });
        };
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>

            {/* <Text style={styles.text}>SignUp With Us</Text> */}
            <Image style={styles.image} source={require('../assets/text.png')}></Image>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="First Name"
                    //placeholderTextColor="#003f5c"
                    onChangeText={firstname => setFirst(firstname)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Last Name"
                    //placeholderTextColor="#003f5c"
                    onChangeText={lastname => setLast(lastname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Birth Date"
                    //placeholderTextColor="#003f5c"
                    onChangeText={birthdate => setBirth(birthdate)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Phone Number"
                    //placeholderTextColor="#003f5c"
                    onChangeText={phone => setPhone(phone)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Email"
                    //placeholderTextColor="#003f5c"
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Password"
                    //placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.SignUpbtn} onPress={handleSignUp}>
                <Text style={styles.btnText}>Sign Up</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.Backbtn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        width: 400,
        height: 100,
    },
    SignUpbtn: {
        width: "45%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c16419',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 190,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',
    },
    Backbtn: {
        width: "45%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c16419',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -190,
        marginTop: -60,
        marginBottom: 20,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#c16419',
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        //fontWeight: 'bold',
        fontSize: 20,
        height: 50,
        color: "#1b3b52",

    },
    btnText: {
        color: '#1b3b52',
        fontSize: 27.5,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});