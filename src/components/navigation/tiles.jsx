import { cn } from "../../lib/utils";
import { Link } from "../ui/link";

const NavTile = ({ children }) => (
	<div className="nav-tile group/tile max-w-[22%] shrink-0 grow">
		<Link className="hover:no-underline">{children}</Link>
	</div>
);

const NavTileTitle = ({ children, className }) => (
	<span
		className={cn(
			"dot mb-6 block whitespace-normal text-2xl font-medium leading-6 group-hover/tile:underline",
			className,
		)}
	>
		{children}
	</span>
);

const NavTileContent = ({ children }) => (
	<div className="font-light">{children}</div>
);

export { NavTile, NavTileContent, NavTileTitle };
