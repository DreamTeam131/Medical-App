import { LineChart } from 'react-native-chart-kit'
import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

const Chart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient Inflow</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.floor(Math.random() * (100 - 5) + 5),
                Math.floor(Math.random() * (100 - 5) + 5),
                Math.floor(Math.random() * (100 - 5) + 5),
                Math.floor(Math.random() * (100 - 5) + 5),
                Math.floor(Math.random() * (100 - 5) + 5),
                Math.floor(Math.random() * (100 - 5) + 5),
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={220}
        //yAxisLabel='$'
        //yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#0ee3ae',
          backgroundGradientFrom: '#10ca9b',
          backgroundGradientTo: '#0aa57f',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#0ee3ae',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
})

export default Chart
