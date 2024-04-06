import { Navigation } from "./components/navigation";
import { PricingSection } from "./components/sections/pricing";

function App() {
	return (
		<>
			<Navigation />
			<main className="pt-42.5 size-full">
				<PricingSection />
			</main>
		</>
	);
}

export default App;
