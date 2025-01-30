import { StyleSheet, Text, View } from "react-native";

export default function App() {
   return (
      <View>
         <Text style={styles.text}>Hello world 🎉</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   text: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginVertical: "1em",
      textAlign: "center"
   }
});