import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header  from '../shared/header';


const Stack = createStackNavigator();
const HomeStack = ({ navigation }) => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:'pink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={ () => ({ 
          headerTitle: () => <Header  title='Home' />,
        })}
      />
      <Stack.Screen 
      name="ReviewDetails" 
      component={ReviewDetails} 
      options={{ title: 'Details' }} 
      />
    </Stack.Navigator>
  );
};


export default HomeStack;

//chay ok 
// const HomeStack = createStackNavigator();
// export default function myStacks() {
//   return (
//     <HomeStack.Navigator 
//     initialRouteName="GameZone" 
//     headerMode="screen"
//     screenOptions={{
//       headerTitleAlign:'center',
//       headerStyle: {
//         backgroundColor: '#eee',
//         },
//         headerTintColor: '#444',
//         height: 60
//     }}>
//       <HomeStack.Screen 
//         name="GameZone" 
//         component={Home}
//         options={{
//           title:'Gamezone',
//           headerLeftContainerStyle:{
//             paddingHorizontal:20,
//           }
//         }} 
      
//       />
//       <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
//     </HomeStack.Navigator>
//   );
// }


