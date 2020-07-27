// import React, {useState} from 'react';
// import {View, Image, Text} from 'react-native';
// import {Avatar} from 'react-native-elements';

// const ProfileManageCoin = (props) => {
//   const [coins, setCoins] = useState(1000);

//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         marginLeft: '2%',
//         marginRight: '2%',
//         justifyContent: 'space-evenly',
//       }}>
//       <Avatar
//         size="xlarge"
//         icon={{name: 'person'}}
//         title={props.avatarTitle}
//         imageProps={{resizeMode: 'cover'}}
//         source={props.avatarUrl}
//         containerStyle={{
//           borderColor: '#e4e3e3',
//           elevation: 15,
//           alignSelf: 'flex-start',
//         }}
//         overlayContainerStyle={{backgroundColor: '#e4e3e3'}}
//         rounded
//         onPress={() => console.log('Works!')}
//       />
//       <View
//         style={{
//           flexDirection: 'column',
//           justifyContent: 'center',
//         }}>
//         <View style={{flexDirection: 'row', marginBottom: '4%'}}>
//           <Image
//             source={require('../assets/coinHeap.jpeg')}
//             style={{width: '20%', height: '120%'}}
//           />
//           <Text style={{fontSize: 20, fontWeight: 'bold'}}> {coins} </Text>
//         </View>
//         <Text style={{fontSize: 16}}>Available Coins</Text>
//       </View>
//     </View>
//   );
// };

// export default ProfileManageCoin;
