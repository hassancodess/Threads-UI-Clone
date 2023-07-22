import { StyleSheet, View, useColorScheme } from "react-native";
import React from "react";
import { Thread } from "../../types/threads";
import { Image } from "expo-image";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const PostLeftSide = (thread: Thread) => {
	const theme = useColorScheme();
	const borderColor = theme === "dark" ? "#ffffff20" : "#00000020";
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={thread.author.photo}
				placeholder={blurhash}
				contentFit="cover"
				transition={1000}
			/>
			<View style={[styles.line, { borderColor: borderColor }]} />
			<View style={styles.repliesContainer}>
				{[1, 2, 3].map((i) => {
					return (
						<Image
							key={i}
							source={thread.replies[i - 1]?.author.photo}
							style={[styles.image, { width: i * 7, height: i * 7 }]}
							placeholder={blurhash}
							contentFit="cover"
							transition={500}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default PostLeftSide;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
	},
	image: {
		borderRadius: 15,
		width: 35,
		height: 35,
	},
	line: {
		borderWidth: 1,
		alignSelf: "center",
		flexGrow: 1,
	},
	repliesContainer: {
		width: 20,
		alignItems: "center",
		alignSelf: "center",
		gap: 3,
	},
});
