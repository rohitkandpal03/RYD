import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  componentDidMount(){
    this.onButtonStart()
  }

  onButtonStart = () => {
    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      if(Number(this.state.minutes_Counter) == 7 && Number(this.state.seconds_Counter)== 59){
        clearInterval(this.state.timer);

      }

      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({timer});

    
  };

  onButtonStop = () => {
   
    this.setState({startDisable: false});
  };

  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.counterText}>
          {this.state.minutes_Counter} : {this.state.seconds_Counter}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  counterText: {
    fontSize: 29,
    color: '#292059',
    fontWeight:"bold",
   
  },
});
