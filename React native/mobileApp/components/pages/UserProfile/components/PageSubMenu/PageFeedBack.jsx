import * as React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PageFeedBack = () => {
  const [text, setText] = React.useState("");
  const handleSubmit = () => {
    console.log("Submitted:", text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textheader}>FeedBack & Support</Text>
      <View style={{ width: "100%", alignItems: "center", padding: 15 }}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          placeholder="Tell us what's on your mind?"
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>

      <View style={{ height: "80%", alignItems: "center" }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.textSubmit}>Submit FeedBack</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
  },
  textheader: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    padding: 15,
  },
  textInput: {
    backgroundColor: "#f6f6f6",
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  textSubmit: {
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
  },
});

export default PageFeedBack;
