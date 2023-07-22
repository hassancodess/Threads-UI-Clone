import { FlatList, ListRenderItem, RefreshControl, ScrollView, StyleSheet } from "react-native";
import React, { useCallback, useContext, useRef } from "react";
import Lottie from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThreadsContext } from "../../context/ThreadContext";
import { Thread } from "../../types/threads";
import { Text, View } from "../../components/Themed";
import { useTheme } from "@react-navigation/native";
import ThreadsItem from "../../components/Thread/ThreadsItem";

const index = () => {
	const animation = useRef<any>(null);
	const { colors } = useTheme();
	const threads = useContext(ThreadsContext);
	const handleScrollRefresh = () => {
		animation.current?.play();
	};

	const renderItem: ListRenderItem<Thread> = ({ item }) => <ThreadsItem {...item} />;

	const keyExtractor = (item: Thread) => item?.id.toString();

	return (
		<SafeAreaView style={styles.root}>
			<FlatList
				refreshControl={<RefreshControl refreshing={false} onRefresh={handleScrollRefresh} />}
				data={threads}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				ListHeaderComponent={
					<Lottie
						loop={false}
						autoPlay
						ref={animation}
						source={require("../../assets/animations/threads.json")}
						style={styles.lottie}
					/>
				}
				contentContainerStyle={styles.scrollViewContainer}
			/>
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	scrollViewContainer: {
		paddingHorizontal: 10,
	},
	lottie: {
		width: 80,
		height: 80,
		alignSelf: "center",
	},
});
