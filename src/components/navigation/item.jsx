import clsx from "clsx";

import { cn } from "../../lib/utils";

const NavItem = ({ children, className }) => {
	return (
		<div
			className={clsx(
				"nav-item pointer-events-auto relative font-semibold",
				className,
			)}
		>
			{children}
		</div>
	);
};

const NavItemTitle = ({
	children,
	className,
	showChevron = false,
	...props
}) => {
	return (
		<a
			className={cn(
				"link-label inline-flex h-12 cursor-pointer items-center px-5 text-primary hover:underline",
				className,
			)}
			href={() => false}
			{...props}
		>
			{children}
		</a>
	);
};

export { NavItem, NavItemTitle };
