import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking } from 'react-native';
import Register from './Register';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',


        }
    }

    updateValue(text, field) {
        if (field == 'name') {
            this.setState({
                name: text,
            })
        } else if (field == 'password') {
            this.setState({
                password: text,
            })
        }
    }



    submit_fun() {

        name = this.state.name;
        password = this.state.password;
        if(name == ''|| name == 'undefined' || password == '' || password == 'undefined'){
            alert('Username Or Password cannot be empty');
        }else{


            var url = 'http://192.168.1.11/payroll/index.php?username=' + name + '&password=' + password;
            // var url = 'http://192.168.1.11/payroll/index.php';
            //new code
    
            var request = new XMLHttpRequest();
            request.onreadystatechange = (e) => {
                if (request.readyState !== 4) {
                    return;
                }
    
                if (request.status === 200) {
                       console.log(request.responseText);
                    if (request.responseText == 'success') {
                        Actions.test();
                    } else {
                        alert('Invalid User Id or Password');
                    }
                } else {
                    console.warn('error');
                }
    
    
            };
    
            request.open('GET', url);
            request.send();


        }

        


        // axios.post(url, {
        //     username: name,
        //     password: password
        //   })
        //   .then(function (response) {
        //     alert(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });



    }



    render() {
        return (
            <ScrollView style={{ marginTop: 50 }}>
                <KeyboardAvoidingView>
                    <View style={styles.container}>



                        <View>

                            <Image
                                style={{ width: 250, height: 250 }}
                                source={require('./assets/hado.png')}
                            />
                        </View>
                        <Text style={{ fontSize: 30, marginBottom: 15 }}>Login</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Image

                                source={require('./assets/person.png')}
                                style={{ height: 40, marginRight: 5, marginTop: 7 }}
                            />
                            <TextInput
                                style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 2, marginBottom: 10, borderRadius: 5, alignContent: "center", textAlign: 'center' }}
                                placeholder="Username"
                                onChangeText={(text) => this.updateValue(text, 'name')} ref={nextInput => this.nextInput = nextInput}
                                autoCapitalize='none'
                            />

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image

                                source={require('./assets/key_black.png')}
                                style={{ height: 40, marginRight: 5 }}
                            />
                            <TextInput
                                style={{ width: 250, height: 50, borderColor: 'gray', borderWidth: 2, marginBottom: 10, borderRadius: 5, alignContent: "center", textAlign: 'center' }}
                                placeholder="Password"
                                onChangeText={(text) => this.updateValue(text, 'password')} ref={nextInput => this.nextInput = nextInput}
                                autoCapitalize='none'
                            />
                        </View>


                        <View style={{ marginLeft: 30, borderRadius: 25, marginBottom: 20, backgroundColor: 'black' }}>

                            <Button title="Login" style={{ width: 250, height: 40, marginBottom: 15, borderRadius: 25 }} onPress={() => this.submit_fun()} />
                            {/* <Image source={require('./assets/login_button.png')} style={{width:50,height:20}}/> */}
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 10 }}>Forgot Password?</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, marginBottom: 10 }}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={() => Actions.register_page()}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}
                                >Register</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Register/> */}
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

        );
    }
}





const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        alignContent: 'center'
    },
});
