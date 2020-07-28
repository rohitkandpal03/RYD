import React,{useState} from 'react';
import {View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

const Search = ({navigation}) => {
  
  const [searchText, setsearchText] = useState('')
  const [spinnerVisibility, setspinnerVisibility] = useState(false)


  const handleOnChangeText = (text) => {
   
  };

  
  return (
    <View style={{marginVertical:10}}>
      <SearchBar
      textInputDisable = 'false'
        height={40}
        fontSize={20}
        fontColor="black"
        iconColor="black"
        shadowColor="#282828"
        cancelIconColor="black"
        backgroundColor="white"
        placeholder="Search"
        fontFamily="BurbankBigCondensed-Black"
        onPress = {() => navigation.navigate('SearchPage')}
        onChangeText={handleOnChangeText}
        cancelButtonDisable
        
      />
    </View>
  );
};

export default Search
