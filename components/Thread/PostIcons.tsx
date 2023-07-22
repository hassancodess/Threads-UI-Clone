import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

const PostIcons = () => {
	const iconSize = 20;
	const theme = useColorScheme();
	const iconColor = theme === "dark" ? "white" : "black";
	return (
		<View style={styles.flexContainer}>
			<FontAwesome name="heart-o" size={iconSize} color={iconColor} />
			<Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
			<AntDesign name="retweet" size={iconSize} color={iconColor} />
			<Feather name="send" size={iconSize} color={iconColor} />
		</View>
	);
};

export default PostIcons;

const styles = StyleSheet.create({
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
});
