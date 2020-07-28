import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { LinearGradient } from "expo-linear-gradient";


const SearchPage = ({ navigation }) => {
  const [searchText, setsearchText] = useState("");
  const [cancelbtn, setcancelbtn] = useState(true)
  const [spinnerVisibility, setspinnerVisibility] = useState(false);

  const handleOnChangeText = (text) => {
    setsearchText(text)
    if(searchText.length === 0){
      setcancelbtn(false)
    }
    
  };
  

  return (
    <View>
      <LinearGradient
        colors={["#292059", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 600,
        }}
      />

      <SearchBar
        height={40}
        fontSize={20}
        fontColor="black"
        iconColor="black"
        shadowColor="#282828"
        cancelIconColor="black"
        cancelButtonDisable = {cancelbtn}
        backgroundColor="white"
        placeholder="Search"
        fontFamily="BurbankBigCondensed-Black"
        onChangeText={(text) => handleOnChangeText(text)}
      />
    
    </View>
  );
};

export default SearchPage;
