import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const BottomBadge = (props) => {
  const badgeDetails = [
    {tag: 'Perfectionist', quote: 'finish all excercise'},
    {tag: 'Archiever', quote: 'Complete an excercise'},
    {tag: 'Scholar', quote: 'Completed a course'},
    {tag: 'Champion', quote: 'Finish #1 in scoreboard'},
  ];
  console.log('aa raha h');
  return (
    <>
      {badgeDetails.map((data, index) => {
        return (
          <View
            key={`${data}${index}`}
            style={{flexDirection: 'row', margin: '2%'}}>
            <Icon type="material" name="favorite" color="#292059" size={50} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: '2%', fontSize: 18, color: '#292059'}}>
                {data.tag}
              </Text>
              <Text
                style={{marginLeft: '0.5%', fontSize: 12, color: '#292059'}}>
                {' '}
                {data.quote}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default BottomBadge;
