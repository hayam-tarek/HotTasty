import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
// import { updateDoc } from "firebase/firestore";
import { auth, db } from '../middlewere/Config';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../middlewere/Config';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getUserUId } from "../middlewere/firebase/auth";
import { getUserById, edituser, subscribe } from "../middlewere/firebase/users";
import { updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import profile from '../assets/profile_pic.jpg'


export default function Profile({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: true });
    }, []);
    const [user, setUser] = useState([]);
    const [profilePicUri, setProfilePicUri] = useState(null);

    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [birthdate, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [viewMode, setViewMode] = useState(true);
    const [image, setImage] = useState(null);


    const handleSelectProfilePic = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }

        setProfilePicUri(pickerResult.uri);
    };


    const handleShowData = async () => {
        // const docRef = doc(db, "users", auth.currentUser.uid);
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        //     const data = docSnap.data();
        //     setFirst(data.fName);
        //     setLast(data.lName);
        //     setBirth(data.birthdate);
        //     setPhone(data.phone);
        // } else {
        //     // docSnap.data() will be undefined in this case
        //     console.log("No such document!");
        // }

        getUserUId().then((id) => {
            getUserById(id).then((user) => {
                setUser(user[0]);
                setFirst(user[0].fName);
                setLast(user[0].lName);
                setPhone(user[0].phone);
                setBirth(user[0].birthdate);
            });
        });
    }
    const handleSave = () => {
        setViewMode(true);
        handleUpdate();
    }
    const handleUpdate = async () => {
        // const washingtonRef = doc(db, "users", auth.currentUser.uid);


        edituser({
            ...user,
            fName: firstname,
            lName: lastname,
            birthdate: birthdate,
            phone: phone,
            profilePicUri: profilePicUri,
        })
            .then(() => {
                alert("Your information updated");
            })
            .catch((e) => console.log(e));
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
                                <Image style={styles.avatar} source={{ uri: profilePicUri ?? 'https://via.placeholder.com/150' }}></Image>

                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={styles.container}>
                            <Text style={styles.text}>Email</Text>
                            <View style={styles.inputMail}>
                                <Text style={styles.mail}>{auth.currentUser.email}</Text>
                            </View>
                            <Text style={styles.text}>First name</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.inputText}>{firstname}</Text>
                            </View>
                            <Text style={styles.text}>Last name</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.inputText}>{lastname}</Text>
                            </View>
                            <Text style={styles.text}>Birth date</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.inputText}>{birthdate}</Text>
                            </View>
                            <Text style={styles.text}>Phone number</Text>
                            <View style={styles.inputView}>
                                <Text style={styles.inputText}>{phone}</Text>

                            </View>
                            <View style={styles.buttonview}>
                                <TouchableOpacity style={styles.button} onPress={handleEdit} >
                                    <View style={styles.button2}>
                                        <Text style={styles.button1}> Edit</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonview}>
                                <TouchableOpacity style={styles.button} onPress={handleSignOut} >
                                    <View style={styles.button2}>
                                        <Text style={styles.button1}> Sign out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </View>

            ) : (
                <View>
                    <ScrollView>

                        <StatusBar style="auto" />
                        <View style={styles.header}></View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image style={styles.avatar} source={{ uri: profilePicUri ?? 'https://via.placeholder.com/150' }}></Image>


                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={styles.container}>
                            <TouchableOpacity style={styles.inputView} onPress={handleSelectProfilePic}>
                                <Text style={styles.inputText}>Select Profile Picture</Text>
                            </TouchableOpacity>

                            <View style={styles.inputMail}>
                                <Text style={styles.mail}>{auth.currentUser.email}</Text>
                            </View>

                            <View style={styles.inputView}>
                                <TextInput style={styles.inputText}
                                    placeholder="FirstName"
                                    //placeholderTextColor="#003f5c"
                                    onChangeText={firstname => setFirst(firstname)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput style={styles.inputText}
                                    placeholder="LastName"
                                    //placeholderTextColor="#003f5c"
                                    onChangeText={lastname => setLast(lastname)}
                                />
                            </View>

                            <View style={styles.inputView}>
                                <TextInput style={styles.inputText}
                                    placeholder="BirthDate"
                                    //placeholderTextColor="#003f5c"
                                    onChangeText={birthdate => setBirth(birthdate)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput style={styles.inputText}
                                    placeholder="PhoneNumber"
                                    //placeholderTextColor="#003f5c"
                                    onChangeText={phone => setPhone(phone)}
                                />
                            </View>
                            <View style={styles.buttonview}>
                                <TouchableOpacity style={styles.button} onPress={handleSave} >
                                    <View style={styles.button2}>
                                        <Text style={styles.button1}> Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonview}>
                                <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                                    <View style={styles.button2}>
                                        <Text style={styles.button1}> Sign out</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#042628',
        height: 150,
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
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        //justifyContent: 'space-around',
        backgroundColor: 'white',
        alignItems: "center",
    },
    inputView: {
        // width: "100%",
        // backgroundColor: "white",
        // borderWidth: 2,
        // borderColor: '#042628',
        // borderRadius: 10,
        // height: 50,
        // marginBottom: 10,
        // justifyContent: "center",
        // padding: 0,
        backgroundColor: "#ffff",
        borderColor: "#042628",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 15,
        paddingLeft: 5,
        marginBottom: 20,
    },
    inputMail: {
        // width: "100%",
        // backgroundColor: "white",
        // borderWidth: 2,
        // borderColor: '#042628',
        // borderRadius: 10,
        // height: 50,
        // marginBottom: 10,
        // justifyContent: "center",
        // padding: 0
        backgroundColor: "#ffff",
        borderColor: "#042628",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 15,
        paddingLeft: 5,
        marginBottom: 20,
    },
    inputText: {
        //fontWeight: 'bold',
        fontSize: 18,
        height: 50,
        color: "#1b3b52",
        padding: 10,
    },
    mail: {
        fontWeight: 'bold',
        fontSize: 18,
        height: 50,
        color: "#1b3b52",
        padding: 10
    },
    outbtn: {
        width: "40%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c16419',
        height: 40,
        alignItems: "center",
        justifyContent: "center",

        marginLeft: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',
    },
    ESbtn: {
        width: "40%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c16419',
        height: 20,
        alignItems: "center",
        justifyContent: "center",

        marginLeft: 200,

        backgroundColor: 'rgba(193, 100, 25, 0.3)',
    },
    btnText: {
        color: '#1b3b52',
        fontSize: 27.5,

        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    text: {
        // color: '#1b3b52',
        // fontSize: 20,
        // lineHeight: 30,
        // fontWeight: 'bold',
        // //textAlign: 'center',
        // //marginBottom:30,
        // padding: 10,
        color: "#042628",
        marginBottom: 5,
        fontWeight: 500,
        fontSize: 14,
        marginRight: 250,
        textAlignVertical: 'center',
    },

    buttonview: {
        marginTop: 30,
    },
    button: {
        borderRadius: 15,
        width: 328,
        height: 48,
        backgroundColor: "#042628",
        color: "#ffff",


    },
    button1: {


        fontWeight: 500,
        fontSize: 18,
        color: "#ffff",
    },
    button2: {
        alignItems: "center",
        marginTop: 15,
    },
});