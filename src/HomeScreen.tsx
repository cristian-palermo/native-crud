import React from 'react';
import {ScrollView, useColorScheme} from 'react-native';
import {List} from './components/List';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const HomeScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView style={backgroundStyle}>
      <List />
    </ScrollView>
  );
};
