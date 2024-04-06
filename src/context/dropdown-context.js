import { createContext, useContext } from "react";

const DropdownContext = createContext();

const useDropdown = () => {
	const context = useContext(DropdownContext);

	if (!context)
		throw new Error("useDropdown must be used within a DropdownProvider");

	return context;
};

export { DropdownContext, useDropdown };
