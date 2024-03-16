import { HomeScreen } from "./HomeScreen";
import { customRender } from "@alura/test-commons/react-testing-library";

const render = customRender();

describe("<HomeScreen />", () => {
	it("renders the page", () => {
		const { container } = render(<HomeScreen />);

		expect(container).toMatchSnapshot();
	});
});
