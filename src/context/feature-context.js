import { createContext, useContext } from "react";

const FeatureContext = createContext();

const useFeature = () => {
	const context = useContext(FeatureContext);
	if (!context)
		throw new Error("useFeature must be used within a FeatureProvider");

	return context;
};

export { FeatureContext, useFeature };
