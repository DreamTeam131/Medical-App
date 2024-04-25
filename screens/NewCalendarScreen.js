/*import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'

export function CalendarScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calendar</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  'modal-container': {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
  },
  formHeader: {
    textDecorationLine: 'underline',
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 15,
  },
})*/

import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
  today: "Today is"
};

LocaleConfig.defaultLocale = 'fr';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
    style={{marginTop:40}}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  );
};

export default CalendarScreen;