import { createContext, useContext } from "react";

const PriceContext = createContext();

const usePrice = () => {
	const context = useContext(PriceContext);
	if (!context)
		throw new Error("usePrice must be used within a PriceProvider");

	return context;
};

export { PriceContext, usePrice };
