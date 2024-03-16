import { customRender } from "@alura/test-commons/react-testing-library";
import { Text } from "./index";

const render = customRender();

describe("<Text />", () => {
	it("renders h1 tag", () => {
		const { container } = render(<Text tag="h1">sample Text</Text>);

		expect(container).toMatchSnapshot();
	});
});
