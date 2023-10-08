import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      
          <View style={styles.one}>
            <View style={styles.login}>
            <Text style={styles.text1}>LOGIN</Text>
          </View>
          </View>
          <View style={styles.two}>
              <View style={styles.username}>
                <Image source ={require("./img/user.png")}style ={styles.image1}></Image>
                  <TextInput
                   style={styles.nametext}
                   placeholder="Name"
                  />
              </View>
              <View style={styles.password}>
                <Image source ={require("./img/lock.png") }style={styles.image2}></Image>
                <TextInput
                   style={styles.nametext}
                   placeholder="password"
                  />
                <Image source ={require("./img/eye.png")} style={styles.image2}></Image>
              </View>
              
          </View>
          
          <View style={styles.three}>
          <Text style={styles.text2}>Login</Text>
          </View>

          <View style={styles.four}>
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
          </View>
        
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "linear-gradient( #FBCB00 , #BF9A00)"
    
  },
  one:{
    flex:1,
    textAlign:"left",
    width:"100%",
    height:"50",
   
  },

  
  text1:{
    fontSize:50,
    fontWeight:700,
    
    
   
    

    },
    two:{
      flex:1,
      marginTop:"30",
      width:"80%",
      height:"50",
      

    },
    username: {
      width:"100%",
      height:"60px",
      borderRadius:"1",
      borderWidth:1,
      flexDirection:'row',
      justifyContent:"space-evenly",
    },
    image1:
  {
    width:"55px",
    height:"55px",
    marginTop:"201",
    marginTop:"24",

  },
  image2:
  {
    width:"55px",
    height:"55px",
    

  },
  nametext:{
    fontSize:"20",
    width:"100%",
    height:"60px",
    flexDirection:'row',
    justifyContent:"space-evenly",
  },
  password: {
    marginTop:"10px",
    width:"330",
    height:"54px",
    borderRadius:"1",
    borderWidth:1,
    flexDirection:'row',
    justifyContent:"space-evenly",
  },
  passwordtext:{
    width:"100%",
    height:"60px",
    flexDirection:'row',
    justifyContent:"space-evenly",
   
  },
 three:{
  flex:1,
  width:"80%",
  height:"50"
 },
 text2:{
  textAlign:"center",
  color:"white",
  fontSize:30,
  borderRadius:"0",
  borderWidth:1,
  flexDirection:'row',
  justifyContent:"space-evenly",
  backgroundColor:"black"
},
four:{
  
  flex: 1,
  alignItems:"center",
  justifyContent:"center",
},
text3:{
  textAlign:"center",
  fontSize:30,
  width: 250,
  height: 30,
  fontWeight: "700",
},

});