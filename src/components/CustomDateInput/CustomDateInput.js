import React, { useState } from 'react';
import { View, StyleSheet, Button, Text} from 'react-native'
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function CustomDateInput({}) {

  const [date, setDate] = useState(new Date(1598051730000))
  const[mode, setMode] = useState('date');
  const [show, setShow]= useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <View style={styles.container}>

    
<View>
        <Button onPress={showDatepicker} title="Project Dealine" />
      </View>
     {/*<View>
        <Button onPress={showTimepicker} title="Show time picker!" />
  </View> */}
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="datePicker"
          format="YYYY-MM-DD"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    datepick:{
        width:300,

    },
    container: {
        marginTop: 10
    }
})
