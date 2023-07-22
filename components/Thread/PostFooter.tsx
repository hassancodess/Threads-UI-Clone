import React from "react";
import { Text } from "../Themed";

interface Props {
	likes: number;
	replies: number;
}
const PostFooter: React.FC<Props> = ({ likes, replies }) => {
	return (
		<Text style={{ color: "gray" }}>
			{replies} replies - {likes} likes
		</Text>
	);
};

export default PostFooter;
