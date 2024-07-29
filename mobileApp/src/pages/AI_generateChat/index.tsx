import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import axios from "axios";

const ChattingAI = () => {
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:8080/generate-image", {
        params: {
          description: description,
        },
      });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Food Image</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Generate Image" onPress={generateImage} />
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 16,
  },
});

export default ChattingAI;
