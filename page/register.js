import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
// import { createUserWithEmailAndPassword, getUserUId } from "../middlewere/firebase";
import { register, getUserUId } from "../middlewere/firebase/auth";
import { auth, db, provider } from "../middlewere/Config";
import { Addusers } from "../middlewere/firebase/users";
import { signInWithPopup } from "firebase/auth";
import Google from "../assets/logos_google-icon.png";
import Frame from "../assets/back.png";


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
      birthdate.length === 0


    ) {
      alert("invalid information");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");

    } else if (fName.length === 0) {
      alert("Please enter your first name");
    } else if (lName.length === 0) {
      alert("Please enter your last name");
    }else {
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






  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);



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
      <ScrollView>
         <View   style={{alignItems:"center"}}>

         
        <View style={styles.titleView}>
          <View style={styles.frameView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIN");
              }}
            >
              <Image source={Frame} style={styles.frame} />
            </TouchableOpacity>
          </View>
          <View style={styles.wordView}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
        </View>


        <View style={styles.emailView}>
          <Text style={styles.inpText}>First Name</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={fName => setFName(fName)}
            />
          </View>
        </View>


        <View style={styles.emailView}>
          <Text style={styles.inpText}>Last Name</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={LName => setLName(LName)}
            />
          </View>
        </View>



        <View style={styles.emailView}>
          <Text style={styles.inpText}>Birth Date</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={birthdate => setbirthdate(birthdate)}
            />
          </View>
        </View>





        <View style={styles.emailView}>
          <Text style={styles.inpText}>Phone Number</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={phone => setPhone(phone)}
            />
          </View>
        </View>


        <View style={styles.emailView}>
          <Text style={styles.inpText}>E-Mail Address</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={email => setEmail(email)}
            />
          </View>
        </View>




        <View style={styles.emailView}>
          <Text style={styles.inpText}>Password</Text>
          <View style={styles.inpView}>
            <TextInput
              style={styles.input}
              onChangeText={password => setPassword(password)}
            />
          </View>
        </View>



        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.button} onPress={checkDate}>
            <View style={styles.button2}>
              <Text style={styles.button1}> Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

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
        </View>


      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  frameView: {

    marginLeft: 15,
    marginRight: 80,

  },
  frame: {
    width: 33,
    height: 30,
  },
  titleView: {
    paddingTop: 30,
    flexDirection: 'row',

    marginRight: 120,

  },
  title: {

    color: "#042628",
    fontWeight: 1000,
    fontSize: 23,
  },
  text: {
    fontWeight: 'bold',
    color: 'darkorange',
    fontSize: 30,
    padding: 30
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
    textAlign: 'center',

    fontWeight: 500,
    fontSize: 18,
    color: "#ffff",
  },
  button2: {
    alignItems: "center",
    marginTop: 15,

  },
  emailView: {
    marginTop: 32,
  },
  inpText: {
    color: "#042628",
    marginBottom: 5,

    fontWeight: 500,
    fontSize: 14,

  },
  input: {
    backgroundColor: "#ffff",
    borderColor: "#042628",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 15,
    paddingLeft: 5,
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
    borderColor: "#042628",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 15,
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

    color: '#ffffff',

    textAlign: "center",
  },
  GoogleTextView: {
    marginTop: -15,
    borderColor: '#white',
  },
  SinginWithGoogleView: {
    marginTop: 30,
    borderRadius:15,
    backgroundColor: '#042628',
    flexDirection: 'row',
  },
});