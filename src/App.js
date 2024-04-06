import { Navigation } from "./components/navigation";
import { PricingSection } from "./components/sections/pricing";

function App() {
	return (
		<>
			<Navigation />
			<main className="size-full pt-42.5">
				<PricingSection />
			</main>
		</>
	);
}

export default App;
