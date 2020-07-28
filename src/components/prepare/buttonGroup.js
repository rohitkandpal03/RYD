import React, {useState} from 'react';

import {ButtonGroup} from 'react-native-elements';
import { color } from 'react-native-reanimated';

const Buttongroup = ({select, before}) => {
  const buttons = ['Practice', 'Compete'];
  const set = (selected) => {
    select(selected);
  };

  return (
    <ButtonGroup
      onPress={(selected) => set(selected)}
      selectedIndex={before}
      buttons={buttons}
      selectedButtonStyle ={{ backgroundColor:'#620bee'}}
      textStyle = {{color : 'white' , fontSize: 20 , fontWeight:'800'}}
      containerStyle={{
        height: "6%",
        elevation: 2,
        borderRadius: 15,
        width: "80%",
        alignSelf: 'center',
        marginTop:30,
        backgroundColor:'#4a47a3',
        borderColor:'#4a47a3'
      }}
    />
  );
};
export default Buttongroup;
