import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const BottomManageCoins = (props) => {
  const [checked, setChecked] = useState({
    icon_0: false,
    icon_1: false,
    icon_2: false,
    icon_3: false,
    icon_4: false,
    icon_5: false,
    icon_6: false,
  });
  const registerDetails = [
    'Add Coins',
    'Purchase History',
    'Spent Analyzer',
    '  ',
    '  ',
    'Share Coins',
    'Information',
  ];

  return (
    <View>
      {registerDetails.map((data, index) => {
        const str = `checked.icon_${index}`;
        return (
          <View
            key={`${data}${index}`}
            style={{flexDirection: 'row', margin: '2%'}}>
            {eval(str) ? (
              <Icon
                type="material"
                name="check-box"
                color="#808080"
                onPress={() =>
                  setChecked({...checked, [`icon_${index}`]: false})
                }
              />
            ) : (
              <Icon
                type="material"
                name="check-box-outline-blank"
                color="#808080"
                onPress={() =>
                  setChecked({...checked, [`icon_${index}`]: true})
                }
              />
            )}
            <Text style={{marginLeft: '2%', fontSize: 18}}>{data}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default BottomManageCoins;
