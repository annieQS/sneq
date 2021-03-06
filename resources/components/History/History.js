import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  FlatList, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  TextInput,
  KeyboardAvoidingView,
  TabBarIOS
} from 'react-native';
import AnimatedBar from "react-native-animated-bar";
import {Icon} from 'react-native-elements';
 

class History extends Component {


  state = {
    progress: 0,
  };
 
  componentDidMount() {
    const interval = setInterval(() => {
      
      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 1000);
  }


  static navigationOptions = {
    tabBarLabel: 'History'
  }

  render() {
    
    return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.date}>Thursday</Text>
        <View style={styles.menuContainer}>
            
          <View style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>Entree: </Text>
            <Text style={styles.foodTypeText}>Pizza: </Text>
            <Text style={styles.foodTypeText}>Soup: </Text>
            <Text style={styles.foodTypeText}>Sandwich: </Text>
            <Text style={styles.foodTypeText}>Special: </Text>
          </View>
          <View style={styles.foodContainer}>
            <View style={{width:200}}>
              <AnimatedBar
                progress={0.7} // manually make up the data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
            </View>


            <View style={{width:200}}>
              <AnimatedBar
                progress={0.5}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.4}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.9}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.15}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
            </View>


          </View> 
          <View style={styles.likeBotton}>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.date}>Wednesday</Text>
        <View style={styles.menuContainer}>
            
          <View style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>Entree: </Text>
            <Text style={styles.foodTypeText}>Pizza: </Text>
            <Text style={styles.foodTypeText}>Soup: </Text>
            <Text style={styles.foodTypeText}>Sandwich: </Text>
            <Text style={styles.foodTypeText}>Special: </Text>
          </View>

          <View style={styles.foodContainer}>
            <View style={{width:200}}>
              <AnimatedBar
                progress={0.3} // manually make up the data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
            </View>


            <View style={{width:200}}>
              <AnimatedBar
                progress={0.9}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.24}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.7}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.6}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
            </View>


          </View> 

          <View style={styles.likeBotton}>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
          </View>

         

        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.date}>Tuesday</Text>
        <View style={styles.menuContainer}>
            
          <View style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>Entree: </Text>
            <Text style={styles.foodTypeText}>Pizza: </Text>
            <Text style={styles.foodTypeText}>Soup: </Text>
            <Text style={styles.foodTypeText}>Sandwich: </Text>
            <Text style={styles.foodTypeText}>Special: </Text>
          </View>

          <View style={styles.foodContainer}>
            <View style={{width:200}}>
              <AnimatedBar
                progress={0.7} // manually make up the data
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Orange Sesame Chicken
                  </Text>
                </View>
              </AnimatedBar>
            </View>


            <View style={{width:200}}>
              <AnimatedBar
                progress={0.5}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Four Cheesse
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.4}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Creamy Tomato & Rice
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.9}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Pancakes w/ Bacon
                  </Text>
                </View>
              </AnimatedBar>
            </View>

            <View style={{width:200}}>
              <AnimatedBar
                progress={0.15}
                height={30}
                borderColor="#DDD"
                barColor="#4169E1"
                borderRadius={5}
                borderWidth={5}
                duration={500}>
                <View style={[styles.row, styles.center]}>
                  <Text style={[styles.barText, { fontSize: 15 }]}>
                    Chefs Choice
                  </Text>
                </View>
              </AnimatedBar>
            </View>


          </View>

          <View style={styles.likeBotton}>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon 
                name="star" 
                size = {30} 
                color={'gold'} 
                marginLeft={10}/>
            </TouchableOpacity>
          </View>



        </View>
      </View>

      
    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'whitesmoke',
  },
  
  menu:{
    
    height: 220,
    backgroundColor:'white',
    margin: 10,
    borderWidth: 0,
    

    
  },

date:{
    top: 10,
    fontSize: 20,
    height: 45,
    textAlign: 'center',
    
},

  menuContainer:{
    height: 170,
    bottom: 5,
    flexDirection: 'row',
    marginLeft: 20,

    
  },
  foodTypeContainer:{
    justifyContent:'space-between',
  

  },

  foodContainer:{
    justifyContent:'space-between',
    
    
    
  },

  foodTypeText:{
    fontSize: 17,
    textAlign: 'left',
    
    backgroundColor:'transparent'
  },
  foodText:{
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Chalkboard SE',
    color: 'black',
    backgroundColor:'transparent'

  },

  row: {
    flexDirection: "row",

  },
  center: {
    justifyContent: "center",
    alignItems: "center",

  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
  },
  likeBotton:{
    justifyContent:'space-between'
  },

});




module.exports = History;