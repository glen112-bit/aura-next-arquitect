import { Text } from "@alura/design-system/components/Text/index";
import { suma } from "@alura/utils/math/suma";
const HomeScreen = () => {
	return (
		<main>
			<Text tag="h1">HomeScreen</Text>
			<Text tag="p">
				importando modulo local: @alura/utils/math/suma suma(2, 2): {suma(2, 2)}{" "}
			</Text>
		</main>
	);
};
export default HomeScreen;
