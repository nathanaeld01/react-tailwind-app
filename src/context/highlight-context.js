import { createContext, useContext } from "react";

const HighlightContext = createContext();

const useHighlight = () => {
	const context = useContext(HighlightContext);
	if (!context)
		throw new Error("useHighlight must be used within a HighlightProvider");

	return context;
};

export { HighlightContext, useHighlight };
