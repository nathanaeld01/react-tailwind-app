import { Navigation } from "./components/navigation";
import { AboutSection } from "./components/sections/about";
import { PricingSection } from "./components/sections/pricing";
import { ProgramsSection } from "./components/sections/programs";
import { QNASection } from "./components/sections/qna";

function App() {
	return (
		<>
			<Navigation />
			<main className="size-full pt-42.5">
				<PricingSection />
				<AboutSection />
				<ProgramsSection />
				<QNASection />
			</main>
		</>
	);
}

export default App;
