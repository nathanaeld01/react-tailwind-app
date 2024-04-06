import { createContext, useContext } from "react";

import { cn } from "../../lib/utils";
import { Link } from "../ui/link";

const DropdownContext = createContext();

const useDropdown = () => {
	const context = useContext(DropdownContext);

	if (!context)
		throw new Error("useDropdown must be used within a DropdownProvider");

	return context;
};

const NavDropdown = ({ children, className, isWide = false }) => {
	return (
		<DropdownContext.Provider value={{ isWide }}>
			<div
				className={cn(
					"nav-item dropdown group pointer-events-auto relative font-semibold",
					isWide && "static",
					className,
				)}
			>
				{children}
			</div>
		</DropdownContext.Provider>
	);
};

const NavDropdownTitle = ({
	children,
	className,
	showChevron = true,
	...props
}) => {
	return (
		<span
			className={cn(
				"span-label relative inline-flex h-12 cursor-default items-center px-5 font-bold text-primary transition-[color] group-[.dropdown]:transition-[color]",
				showChevron && "chevron",
				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
};

const NavDropdownMenu = ({ children, className }) => {
	const { isWide } = useDropdown();

	return (
		<div
			className={cn(
				"absolute top-full -z-2 mt-2 hidden min-w-[calc(100%+8.25rem)] rounded border-4 border-primary bg-white px-5 py-2.5 group-hover:block",
				isWide &&
					"-left-[8rem] mt-[7px] w-[calc(100%+8rem)] min-w-[unset] px-22 py-13",
				className,
			)}
		>
			{children}
		</div>
	);
};

const NavDropdownItem = ({ children }) => {
	return (
		<Link className="block pb-2.5 text-base font-light leading-6 text-primary hover:underline">
			{children}
		</Link>
	);
};

export { NavDropdown, NavDropdownItem, NavDropdownMenu, NavDropdownTitle };
