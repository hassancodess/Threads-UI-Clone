import { StyleSheet, View } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text } from "../Themed";
import { getTimeDifference } from "../../utils/generateTimeDifference";
interface Props {
	name: string;
	createdAt: string;
	verified: boolean;
}

const PostHeading: React.FC<Props> = ({ name, createdAt, verified }) => {
	return (
		<View style={styles.container}>
			<View style={styles.flexContainer}>
				<Text style={styles.text}>{name}</Text>
				{verified && <MaterialIcons name="verified" size={14} color="#60a5fa" />}
			</View>
			<View style={styles.flexContainer}>
				<Text style={styles.date}>{getTimeDifference(createdAt)}</Text>
				<Feather name="more-horizontal" size={14} color="gray " />
			</View>
		</View>
	);
};

export default PostHeading;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flexGrow: 1,
	},
	flexContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	text: {
		fontWeight: "500",
	},
	date: {
		color: "gray",
	},
});
