import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useResponsiveHeight} from 'react-native-responsive-dimensions';

const OnBoardingScreen = () => {
  const images = [
    require('../assets/waterfall2.jpg'),
    require('../assets/waterfall1.jpg'),
    require('../assets/waterfall2.jpg'),
  ];
  return (
    <SafeAreaView>
      <SliderBox
        images={images}
        inactiveDotColor="#e4e3e3"
        autoplay={true}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxVerticalPadding={'11%'}
        sliderBoxHeight={useResponsiveHeight(60)}
        imageLoadingColor="#dadae7"
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
