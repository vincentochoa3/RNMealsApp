import {
	View,
	Pressable,
	Text,
	Image,
	StyleSheet,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "./MealDetails";

function MealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation();

	function selectMealItemHandler() {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectMealItemHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	buttonPressed: {
		opacity: 0.75,
		backgroundColor: "#ccc",
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
});
