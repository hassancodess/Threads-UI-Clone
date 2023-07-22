import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../Themed";
import { Thread } from "../../types/threads";
import { Image } from "expo-image";
import PostHeading from "./PostHeading";
import PostFooter from "./PostFooter";
import PostIcons from "./PostIcons";
import PostLeftSide from "./PostLeftSide";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ThreadsItem = (thread: Thread): JSX.Element => {
	return (
		<View style={styles.flexContainer}>
			<PostLeftSide {...thread} />
			<View style={styles.container}>
				{/* <Text>{thread.author.username}</Text> */}
				<PostHeading
					name={thread.author.username}
					createdAt={thread.createdAt}
					verified={thread.author.verified}
				/>
				<Text style={styles.contentText}>{thread.content}</Text>
				{thread.image && (
					// <Image />
					<Image
						style={styles.image}
						source={{ uri: thread.image }}
						placeholder={blurhash}
						contentFit="cover"
						transition={1000}
					/>
				)}
				<PostIcons />
				<PostFooter likes={thread.likesCount} replies={thread.repliesCount} />
			</View>
		</View>
	);
};

export default ThreadsItem;

const styles = StyleSheet.create({
	container: {
		gap: 10,
		flexShrink: 1,
	},
	flexContainer: {
		flexDirection: "row",
		gap: 6,
		paddingBottom: 30,
	},
	image: {
		flex: 1,
		width: "100%",
		minHeight: 300,
		borderRadius: 10,
		backgroundColor: "#0553",
	},
	contentText: {
		lineHeight: 20,
	},
});
