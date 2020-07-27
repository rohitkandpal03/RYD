import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, Animated, Image, TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Swiper from 'react-native-deck-swiper';
import {useResponsiveHeight} from 'react-native-responsive-dimensions';

const FlashCard = (props) => {
  const cardName = [
    require('../assets/waterfall1.jpg'),
    require('../assets/waterfall2.jpg'),
    require('../assets/google.png'),
  ];
  const [swipedAllCards, setSwipedAllCards] = useState(false);
  // const [isSwiping, setIsSwiping] = useState(true);
  const [cardNum, setCardNum] = useState(0);
  // const cardRef = useRef(null);

  const onSwiped = () => {
    cardNum < cardName.length ? setCardNum(cardNum + 1) : null;
  };

  const onSwipedLeft = () => {
    if (cardNum !== 0) {
      setCardNum(cardNum - 1);
    }
  };

  const renderCard = (card) => {
    return (
      <View style={styles.cards}>
        <Image
          source={cardName[cardNum]}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  };

  useEffect(() => {
    Animated.event(console.log('event all time....'), {
      useNativeDriver: true,
    });
  });

  console.log(cardNum);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Swiper
          cards={cardName}
          infinite={true}
          renderCard={renderCard}
          cardStyle={{marginTop: useResponsiveHeight(25)}}
          dragStart={() =>
            Animated.event(console.log('draginggg....'), {
              useNativeDriver: true,
            })
          }
          animateCardOpacity={true}
          onSwipedRight={onSwiped}
          onSwipedLeft={onSwipedLeft}
          overlayLabels={{
            bottom: {
              swipeColor: '#9262C2',
              backgroundOpacity: '0.75',
              fontColor: '#FFF',
            },
            left: {
              swipeColor: '#FF6C6C',
              backgroundOpacity: '0.75',
              fontColor: '#FFF',
            },
            right: {
              swipeColor: '#4CCC93',
              backgroundOpacity: '0.75',
              fontColor: '#FFF',
            },
            top: {
              swipeColor: '#4EB8B7',
              backgroundOpacity: '0.75',
              fontColor: '#FFF',
            },
          }}></Swiper>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
  cards: {
    width: '80%',
    height: '50%',
    borderRadius: 4,
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default FlashCard;
