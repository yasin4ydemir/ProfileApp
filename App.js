import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile App</Text>
        </View>
        
        <ProfileCard 
          name="Ada Lovelace" 
          role="Mathematician" 
          imageSource={require('./assets/ada.png')} 
        />
        <ProfileCard 
          name="Grace Hopper" 
          role="Computer Scientist" 
          imageSource={require('./assets/grace.png')} 
        />
        <ProfileCard 
          name="Hedy Lamarr" 
          role="Inventor" 
          imageSource={require('./assets/hedy.png')} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});