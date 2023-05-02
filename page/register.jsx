import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
// import { createUserWithEmailAndPassword, getUserUId } from "../middlewere/firebase";
import { register, getUserUId } from "../middlewere/firebase/auth";
import { auth,db, provider } from "../middlewere/Config";
import { Addusers } from "../middlewere/firebase/users";
import { signInWithPopup } from "firebase/auth";
import Google from "../assets/logos_google-icon.png"; 


export default function SignUp({ navigation }) {

  const [value, setValue] = useState("");
  const SingUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  // const [checked, setChecked] = useState("first");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setbirthdate] = useState("");
  


  const checkDate = () => {
    if (
      email.length === 0 &&
      password.length === 0 &&
      fName.length === 0 &&
      lName.length === 0 &&
      phone.length === 0 &&
      birthdate.length===0
      
      
    ) {
      alert("invalid information");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
    } else {
      register(email, password)
        .then(() => {
          console.log("registerd");
          alert("Register Success!\nPlease Login");
          navigation.navigate("SignIN");
          getUserUId().then((id) => {
            Addusers({
              uid: id,
              email: email,
              password: password,
              fName: fName,
              lName: lName,
              phone: phone,
              birthdate: birthdate,
              
            });
          });
        })
        .catch((err) => {
          {
            if (
              err.message.includes("already-in-use") &&
              email !== "" &&
              password !== ""
            ) {
              alert("The email is already exist");
            } else if (err.message.includes("invalid-email") && email !== "") {
              alert("The Email is incorrect");
            }
          }
        });
    }
  };




  //   const [value, setValue] = useState("");
  // const SingUpWithGoogle = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user.email);
  //     localStorage.setItem("email", data.user.email);
  //   });
  // };


    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);


  //   const [checked, setChecked] = useState("first");
  //   const [email, setEmail] = useState("");
  //     const [password, setPassword] = useState("");
  //     const [firstname, setFirst] = useState("");
  //     const [lastname, setLast] = useState("");
  //     const [birthdate, setBirth] = useState("");
  //     const [phone, setPhone] = useState("");



  //   // const [username, setUsername] = useState("");
    
  // const checkDate = () => {
  //   if (
  //     email.length === 0 &&
  //     password.length === 0 &&
  //     firstname.length === 0 &&
  //     lastname.length === 0 &&
  //     phone.length === 0 
      
  //   ) {
  //     alert("invalid information");
  //   } else if (password.length < 8) {
  //     alert("Password must be at least 8 characters");
  //   } else {
  //       createUserWithEmailAndPassword(email, password)
  //       .then(() => {
  //         console.log("registerd");
  //         alert("Register Success!\nPlease Login");
  //         navigation.navigate("SignIn");
  //         getUserUId().then((id) => {
  //           Addusers({
  //             uid: id,
  //             email: email,
  //             password: password,
  //             firstname: firstname,
  //             lastname: lastname,
  //             phone: phone,
  //             birthdate: birthdate,
              
  //           });
  //         });
  //       })
  //       .catch((err) => {
  //         {
  //           if (
  //             err.message.includes("already-in-use") &&
  //             email !== "" &&
  //             password !== ""
  //           ) {
  //             alert("The email is already exist");
  //           } else if (err.message.includes("invalid-email") && email !== "") {
  //             alert("The Email is incorrect");
  //           }
  //         }
  //       });
  //   }
  // };
        const handleSetData = async () => {
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                phone: phone
            });
        };
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>

            {/* <Text style={styles.text}>SignUp With Us</Text> */}
            <Image style={styles.image} source={require('../assets/text.png')}></Image>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="First Name"
                    //placeholderTextColor="#003f5c"
                    onChangeText={fName => setFName(fName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Last Name"
                    //placeholderTextColor="#003f5c"
                    onChangeText={LName => setLName(LName)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Birth Date"
                    //placeholderTextColor="#003f5c"
                    onChangeText={birthdate => setbirthdate(birthdate)}
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

            <TouchableOpacity style={styles.SignUpbtn} onPress={checkDate}>
                <Text style={styles.btnText}>Sign Up</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.Backbtn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.SinginWithGoogleView}>
        {value ? (
          navigation.navigate("SignIN")
        ) : (
          <TouchableOpacity style={styles.touch} onPress={SingUpWithGoogle}>
            <Image source={Google} style={styles.GoogleIcon} />
            <View style={styles.GoogleTextView}>
              <Text style={styles.GoogleText}>Sing up with Google</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>


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
    },
    touch: {
        borderColor: "#0B3B63",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 5,
      },
      GoogleIcon: {
        marginTop: 15,
        marginLeft: 78,
        width: 16,
        height: 16,
      },
      GoogleText: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: '#1b3b52',
    
       
        textAlign: "center",
      },
      GoogleTextView: {
        marginTop: -15,
        borderColor: '#c16419',
      },
      SinginWithGoogleView: {
        marginTop: 30,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',
      },
});