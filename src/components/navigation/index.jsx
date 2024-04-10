import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Link } from "../ui/link";
import {
	NavDropdown,
	NavDropdownItem,
	NavDropdownMenu,
	NavDropdownTitle,
} from "./dropdown";
import { NavItem, NavItemTitle } from "./item";
import { NavTile, NavTileContent, NavTileTitle } from "./tiles";

// eslint-disable-next-line perfectionist/sort-imports
import "../../styles/navigation.css";
import { BookDemo } from "./book-demo";

const FootItem = ({ active, children, className }) => (
	<Link className={cn("nav-foot-item", active && "active", className)}>
		{children}
	</Link>
);

export const Navigation = () => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isToggled, setIsToggled] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const navRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				if (!hasScrolled) setHasScrolled(true);
				setIsScrolled(true);
			} else setIsScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	useEffect(() => {
		if (!isScrolled) return;

		const navEl = navRef.current;

		const handleMouseEnter = () => setIsHovered(true);
		const handleMouseLeave = () => setIsHovered(false);

		navEl.addEventListener("mouseenter", handleMouseEnter);
		navEl.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			navEl.removeEventListener("mouseenter", handleMouseEnter);
			navEl.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [isScrolled]);

	useEffect(() => {
		if (isToggled && window.innerWidth > 1024) {
			setIsToggled(false);
		}
	}, [isToggled]);

	const navClasses = clsx(
		hasScrolled && isHovered && "nav-show",
		isScrolled && "nav-sticky",
		isHovered && "nav-open",
	);

	const menuClasses = clsx(
		"menu-list",
		isScrolled && "menu-sticky",
		isHovered && "menu-open",
	);

	const itemClasses = clsx(
		hasScrolled && "item-show",
		isScrolled && "item-hide",
		isHovered && "item-open",
	);

	return (
		<div
			className={cn(
				"navigation group/nav pointer-events-none fixed left-0 top-0 z-5 flex w-dvw items-center justify-between px-[4%] py-7.5 2xl:px-[calc(50%-660px)]",
				isToggled && "active nav-bg max-xl:animate-none",
				navClasses,
			)}
			ref={navRef}
		>
			<div
				className={cn(
					"pointer-events-auto flex items-center gap-2.5 text-xl font-semibold",
					isToggled && "max-xl:z-4",
				)}
			>
				<img alt="Syncspace" className="h-12" src="/logo.png" />
				<span className={itemClasses}>Syncspace</span>
			</div>
			<button
				className="nav-toggle relative z-4 block size-5 origin-center cursor-pointer xl:hidden"
				onClick={() => {
					document.body.classList.toggle(
						"max-xl:overflow-hidden",
						!isToggled,
					);
					setIsToggled(!isToggled);
				}}
				type="button"
			/>
			<div
				className={cn(
					"grow max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:hidden max-xl:overflow-y-auto max-xl:bg-white max-xl:px-[4%] max-xl:pt-25 max-xl:size-dv xl:pl-5",
					isToggled && "max-xl:block",
					menuClasses,
				)}
			>
				<nav className="relative flex flex-col-reverse items-stretch justify-start max-xl:pb-20 xl:flex-row xl:items-baseline">
					<NavDropdown className="hidden xl:inline-block" isWide>
						<NavDropdownTitle className={itemClasses}>
							Solutions
						</NavDropdownTitle>
						<NavDropdownMenu>
							<div className="mb-11 flex justify-between">
								<NavTile>
									<NavTileTitle className="after:bg-secondary-yellow after:px-1.5 after:pb-0.5 after:!content-['new']">
										Product
										<br />
										Management
									</NavTileTitle>
									<NavTileContent>
										Aggregate customers feedback from many
										sources, link feedback to features, make
										smart decisions about priorities, and
										invent new ideas together.
									</NavTileContent>
								</NavTile>
								<NavTile>
									<NavTileTitle className="after:w-3.5 after:bg-secondary-red">
										Software
										<br />
										Development
									</NavTileTitle>
									<NavTileContent>
										Collaborate on backlogs, sprints,
										releases, and development wiki — all in
										one place. Replace most of your stack
										with a single tool.
									</NavTileContent>
								</NavTile>
								<NavTile>
									<NavTileTitle className="after:w-3.5 after:bg-secondary-orange">
										Digital
										<br />
										Agency
									</NavTileTitle>
									<NavTileContent>
										Manage both internal and client work.
										Track multiple projects, store customer
										CRM, and manage finances — all in one
										place.
									</NavTileContent>
								</NavTile>
								<NavTile>
									<NavTileTitle className="after:w-3.5 after:bg-secondary-blue">
										<br />
										Startup
									</NavTileTitle>
									<NavTileContent>
										Set strategy, connect it to execution,
										validate ideas, research your market,
										and do stuff. Stay focused and discover
										new insights.
									</NavTileContent>
								</NavTile>
							</div>
							<div>
								<Link className="mb-4 inline-block text-lg no-underline">
									Template Library
								</Link>
								<div className="font-normal">
									<Link className="mb-1 mr-9 inline-block">
										Product & Design
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										Software Development
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										Research & Feedback
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										HR
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										Sales & Marketing
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										Project Management
									</Link>
									<Link className="mb-1 mr-9 inline-block">
										Startup
									</Link>
									<Link className="mb-1 mr-9 inline-block opacity-50">
										Show all templates
									</Link>
								</div>
							</div>
						</NavDropdownMenu>
					</NavDropdown>
					<NavDropdown className="hidden xl:inline-block">
						<NavDropdownTitle className={itemClasses}>
							Products
						</NavDropdownTitle>
						<NavDropdownMenu>
							<NavDropdownItem>Features</NavDropdownItem>
							<NavDropdownItem>Fibery AI</NavDropdownItem>
							<NavDropdownItem>Fibery vs. X</NavDropdownItem>
							<NavDropdownItem>Customer stories</NavDropdownItem>
							<NavDropdownItem>Integrations</NavDropdownItem>
						</NavDropdownMenu>
					</NavDropdown>
					<NavDropdown className="hidden xl:inline-block">
						<NavDropdownTitle className={itemClasses}>
							Resources
						</NavDropdownTitle>
						<NavDropdownMenu>
							<NavDropdownItem>Getting Started</NavDropdownItem>
							<NavDropdownItem>Expert Help</NavDropdownItem>
							<NavDropdownItem>Blog</NavDropdownItem>
							<NavDropdownItem>User Guide</NavDropdownItem>
							<NavDropdownItem>
								Webinars & Tutorials
							</NavDropdownItem>
							<NavDropdownItem>Community</NavDropdownItem>
						</NavDropdownMenu>
					</NavDropdown>
					<NavItem className="hidden xl:inline-block">
						<NavItemTitle className={itemClasses}>
							Pricing
						</NavItemTitle>
					</NavItem>
					<NavDropdown className="max-xl:px-6" isWide>
						<NavDropdownTitle
							className={cn(
								"hidden tracking-widest xl:inline-flex",
								itemClasses,
							)}
							showChevron={false}
						>
							•••
						</NavDropdownTitle>
						<NavDropdownMenu className="max-xl:visible max-xl:static max-xl:block max-xl:w-full max-xl:border-0 max-xl:p-0">
							<div className="mb-7.5 flex flex-col gap-5 max-md:flex-wrap sm:flex-row">
								<div className="nav-foot-col mb-5 sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)]">
									<h4 className="font-semibold">Solutions</h4>
									<FootItem>No code</FootItem>
									<FootItem>Product management</FootItem>
									<FootItem>User research</FootItem>
									<FootItem>Startup</FootItem>
									<FootItem>Software development</FootItem>
									<FootItem>Digital agency</FootItem>
									<FootItem className="mt-10">
										Template Library
									</FootItem>
								</div>
								<div className="nav-foot-col mb-5 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)]">
									<h4 className="font-semibold">Products</h4>
									<FootItem>Features</FootItem>
									<FootItem className="badge new">
										Fibery AI
									</FootItem>
									<FootItem active>Pricing</FootItem>
									<FootItem>Fibery vs. X</FootItem>
									<FootItem>Customer stories</FootItem>
									<FootItem>Integrations</FootItem>
									<FootItem>Changelog</FootItem>
									<FootItem>Partners program</FootItem>
									<FootItem>Startup program</FootItem>
									<FootItem className="badge fun">
										Anxiety
									</FootItem>
								</div>
								<div className="nav-foot-col mb-5 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)]">
									<h4 className="font-semibold">Resources</h4>
									<FootItem>Getting Started</FootItem>
									<FootItem>Expert Help</FootItem>
									<FootItem>Blog</FootItem>
									<FootItem>User Guide</FootItem>
									<FootItem>Community</FootItem>
									<FootItem>Webinars & Tutorials</FootItem>
									<FootItem>API</FootItem>
									<FootItem>Status</FootItem>
									<FootItem>Security & Privacy</FootItem>
									<FootItem>Cookie settings</FootItem>
								</div>
								<div className="nav-foot-col mb-5 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)]">
									<h4 className="font-semibold">Team</h4>
									<FootItem>About us</FootItem>
									<FootItem>Open startup</FootItem>
									<FootItem>Startup diary</FootItem>
									<FootItem>Careers</FootItem>
								</div>
							</div>
							<div className="relative text-primary">
								<div className="absolute inset-y-0 right-2.5 my-auto flex h-4 cursor-pointer gap-2.5">
									<SearchIcon
										className="size-4 stroke-primary"
										strokeWidth="3"
									/>
								</div>
								<input
									className="relative z-1 h-12 w-full appearance-none border-b-2 border-b-primary bg-transparent text-xl outline-none"
									placeholder="Search for a template, space or integration..."
								/>
							</div>
						</NavDropdownMenu>
					</NavDropdown>
					<div className="flex flex-col-reverse justify-between max-xl:px-6 max-xl:pb-15 max-xl:pt-5 max-sm:gap-5 sm:flex-row-reverse sm:max-xl:*:w-[30%] xl:ml-auto xl:flex-row xl:gap-4">
						<Link
							className={cn(
								"inline-flex items-center justify-center px-6 max-sm:w-full max-sm:py-2.5 xl:px-4",
								itemClasses,
							)}
						>
							Log In
						</Link>
						<BookDemo className={itemClasses} />
						<Button
							className="max-sm:w-full"
							size="sm"
							text="md"
							variant="primary"
						>
							Try for free
						</Button>
					</div>
				</nav>
			</div>
		</div>
	);
};
