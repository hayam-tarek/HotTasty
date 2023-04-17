import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { auth, db } from '../middlewere/firebase';

export default function Profile({ navigation }) {
    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [birthdate, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [viewMode, setViewMode] = useState(true);

    const handleShowData = async () => {
        const docRef = doc(db, "Users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();
            setFirst(data.firstname);
            setLast(data.lastname);
            setBirth(data.birthdate);
            setPhone(data.phone);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const handleSave = () => {
        setViewMode(true);
        handleUpdate();
    }
    const handleUpdate = async () => {
        const washingtonRef = doc(db, "Users", auth.currentUser.uid);

        await updateDoc(washingtonRef, {
            firstname: firstname,
            lastname: lastname,
            birthdate: birthdate,
            phone: phone
        });
    }
    const handleEdit = () => {
        setViewMode(false);
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log(' Sign-out successful')
        }).catch((error) => {
            console.log(error)
        });

        navigation.navigate("Home")
    }
    { viewMode ? handleShowData() : null };
    return (
        <View>
            {viewMode ? (
                <View>
                    <ScrollView>
                        <StatusBar style="auto" />
                        <View style={styles.header}></View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image style={styles.avatar} source={require('../assets/profile_pic.jpg')}></Image>

                            </TouchableOpacity>
                        </View>


                        <View style={styles.inputMail}>
                            <Text style={styles.mail}>{auth.currentUser.email}</Text>
                        </View>

                        <View style={styles.inputView1}>

                            <Text style={styles.inputText1}>{firstname}</Text>


                        </View>
                        <View style={styles.inputView2}>
                            <Text style={styles.inputText1}>{lastname}</Text>
                        </View>

                        <View style={styles.inputView3}>
                            <Text style={styles.inputText1}>{birthdate}</Text>
                        </View>
                        <View style={styles.inputView4}>
                            <Text style={styles.inputText1}>{phone}</Text>

                        </View>
                        <TouchableOpacity style={styles.savebtn} onPress={handleEdit}>
                            <Text style={styles.outText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outbtn} onPress={handleSignOut}>
                            <Text style={styles.outText}>Sign Out</Text>

                        </TouchableOpacity>
                    </ScrollView>
                </View>

            ) : (
                <View>
                    <ScrollView>

                        <StatusBar style="auto" />
                        <View style={styles.header}></View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image style={styles.avatar} source={require('../assets/profile_pic.jpg')}></Image>

                            </TouchableOpacity>
                        </View>


                        <View style={styles.inputMail}>
                            <Text style={styles.mail}>{auth.currentUser.email}</Text>
                        </View>

                        <View style={styles.inputView1}>
                            <TextInput style={styles.inputText1}
                                placeholder="FirstName"
                                placeholderTextColor="#003f5c"
                                onChangeText={firstname => setFirst(firstname)}
                            />
                        </View>
                        <View style={styles.inputView2}>
                            <TextInput style={styles.inputText1}
                                placeholder="LastName"
                                placeholderTextColor="#003f5c"
                                onChangeText={lastname => setLast(lastname)}
                            />
                        </View>

                        <View style={styles.inputView3}>
                            <TextInput style={styles.inputText1}
                                placeholder="BirthDate"
                                placeholderTextColor="#003f5c"
                                onChangeText={birthdate => setBirth(birthdate)}
                            />
                        </View>
                        <View style={styles.inputView4}>
                            <TextInput style={styles.inputText1}
                                placeholder="PhoneNumber"
                                placeholderTextColor="#003f5c"
                                onChangeText={phone => setPhone(phone)}
                            />
                        </View>
                        <TouchableOpacity style={styles.editbtn} onPress={handleSave}>
                            <Text style={styles.outText}>Save</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outbtn} onPress={handleSignOut}>
                            <Text style={styles.outText}>Sign Out</Text>

                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: 'darkorchid',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    header: {
        backgroundColor: '#00BFFF',
        height: 100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginTop: -70,
        marginBottom: 30
    },
    inputView1: {
        width: "80%",
        backgroundColor: "orangered",
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView2: {
        width: "80%",
        backgroundColor: "orangered",
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView3: {
        width: "80%",
        backgroundColor: "orangered",
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView4: {
        width: "80%",
        backgroundColor: "orangered",
        borderRadius: 10,
        height: 50,
        marginLeft: 20,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputMail: {
        width: "80%",
        backgroundColor: "darkorchid",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        marginLeft: 20,
        justifyContent: "center",
        padding: 20
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
        padding: 20
    },
    inputText1: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 30,
        color: "white"
    },
    mail: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 35,
        color: "black"
    },
    outbtn: {
        width: "40%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -70,
        marginLeft: 10,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    editbtn: {
        width: "40%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 200,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    savebtn: {
        width: "40%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 200,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    outText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});