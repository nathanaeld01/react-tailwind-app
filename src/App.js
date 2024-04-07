import { Navigation } from "./components/navigation";
import { AboutSection } from "./components/sections/about";
import { PricingSection } from "./components/sections/pricing";
import { ProgramsSection } from "./components/sections/programs";

function App() {
	return (
		<>
			<Navigation />
			<main className="size-full pt-42.5">
				<PricingSection />
				<AboutSection />
				<ProgramsSection />
			</main>
		</>
	);
}

export default App;
