import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import Header  from '../shared/header';


const Stack = createStackNavigator();
const AboutStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle: {
          backgroundColor:'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={ () => ({ 
          headerTitle: () => <Header  title='About'/>,
        })}
      />
      {/* <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} /> */}
    </Stack.Navigator>
  );
};

export default AboutStack;


// Chạy ok
// const AboutStack = createStackNavigator();
// export default function myStacks() {
//   return (
//     <AboutStack.Navigator 
//     initialRouteName="About gamezone" 
//     headerMode="screen"
//     screenOptions={{
//       headerTitleAlign:'center',
//       headerStyle: {
//         backgroundColor: '#eee',
//         },
//         headerTintColor: '#444',
//         height: 60
//     }}>
//       <AboutStack.Screen
//         name="About gamezone"
//         component={About}
//         options={{ 
//           title: 'About gamezone',
//          headerLeftContainerStyle:{
//            paddingHorizontal:20,
//          } 
//         }}
//       />
//     </AboutStack.Navigator>
//   );
// }


