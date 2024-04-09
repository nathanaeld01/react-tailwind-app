import { SearchIcon, StarIcon } from "lucide-react";

import { cn } from "../lib/utils";
import {
	EmailIcon,
	G2Icon,
	GooglePlayIcon,
	LinkedInIcon,
	XSocialIcon,
	YoutubeIcon,
} from "./icons";
import { Link } from "./ui/link";

const FootItem = ({ active, children, className }) => (
	<Link className={cn("nav-foot-item", active && "active", className)}>
		{children}
	</Link>
);

export const Footer = () => (
	<footer className="section-wide py-15">
		<div className="section-row mb-16 flex flex-col lg:flex-row lg:gap-5">
			<div className="flex flex-col items-start justify-between sm:max-md:flex-row lg:w-[calc(20%-1.25rem)] lg:justify-start">
				<div className="mb-22 w-full max-w-64">
					<Link className="mb-3.5 block text-xl font-semibold hover:no-underline">
						Syncspace
					</Link>
					<p>
						Work & knowledge
						<br />
						management hub
					</p>
				</div>
				<div className="mb-22 w-full max-w-64">
					<div className="mb-2.5 flex gap-1">
						<StarIcon className="size-4 fill-orange stroke-orange" />
						<StarIcon className="size-4 fill-orange stroke-orange" />
						<StarIcon className="size-4 fill-orange stroke-orange" />
						<StarIcon className="size-4 fill-orange stroke-orange" />
						<StarIcon className="size-4 fill-orange stroke-orange" />
					</div>
					<p className="mb-2.5">Rated 4.8 on G2 and Capterra</p>
					<div className="flex gap-2.5">
						<Link className="transition-transform duration-300 hover:scale-120">
							<G2Icon />
						</Link>
						<Link className="transition-transform duration-300 hover:scale-120">
							<GooglePlayIcon />
						</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap items-start justify-between gap-5 lg:w-[calc(80%-1.25rem)]">
				<div className="nav-foot-col mb-5 w-[calc(50%-1.25rem)] sm:w-[calc(33%-1.25rem)] md:w-[calc(25%-1.25rem)]">
					<h4 className="font-semibold">Solutions</h4>
					<FootItem>No code</FootItem>
					<FootItem>Product management</FootItem>
					<FootItem>User research</FootItem>
					<FootItem>Startup</FootItem>
					<FootItem>Software development</FootItem>
					<FootItem>Digital agency</FootItem>
					<FootItem className="mt-10">Template Library</FootItem>
				</div>
				<div className="nav-foot-col mb-5 w-[calc(50%-1.25rem)] sm:w-[calc(33%-1.25rem)] md:w-[calc(25%-1.25rem)]">
					<h4 className="font-semibold">Products</h4>
					<FootItem>Features</FootItem>
					<FootItem className="badge new">Syncspace AI</FootItem>
					<FootItem active>Pricing</FootItem>
					<FootItem>Syncspace vs. X</FootItem>
					<FootItem>Customer stories</FootItem>
					<FootItem>Integrations</FootItem>
					<FootItem>Changelog</FootItem>
					<FootItem>Partners program</FootItem>
					<FootItem>Startup program</FootItem>
					<FootItem className="badge fun">Anxiety</FootItem>
				</div>
				<div className="nav-foot-col mb-5 w-[calc(50%-1.25rem)] sm:w-[calc(33%-1.25rem)] md:w-[calc(25%-1.25rem)]">
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
				<div className="nav-foot-col mb-5 w-[calc(50%-1.25rem)] sm:w-[calc(33%-1.25rem)] md:w-[calc(25%-1.25rem)]">
					<h4 className="font-semibold">Team</h4>
					<FootItem>About us</FootItem>
					<FootItem>Open startup</FootItem>
					<FootItem>Startup diary</FootItem>
					<FootItem>Careers</FootItem>
				</div>
			</div>
		</div>
		<div className="section-row">
			<div className="w-full pb-22 md:px-[12.5%]">
				<div className="relative">
					<div className="absolute inset-y-0 right-2.5 my-auto flex h-4 cursor-pointer gap-2.5">
						<SearchIcon
							className="size-4 stroke-primary"
							strokeWidth="3"
						/>
					</div>
					<input
						className="h-12 w-full border-b-2 border-b-primary text-xl outline-none"
						placeholder="Search for a template, space or integration..."
						type="text"
					/>
				</div>
			</div>
		</div>
		<div className="section-row flex flex-col justify-between gap-12 md:flex-row">
			<div className="flex flex-col items-start gap-2 text-sm text-primary/50 lg:flex-row lg:items-center lg:gap-7.5">
				<span className="text-lg text-primary">
					© Syncspace Limited
				</span>
				<div className="flex gap-10">
					<Link>Terms</Link>
					<Link>Privacy Policy</Link>
					<Link>Cookies Policy</Link>
				</div>
			</div>
			<div className="flex gap-10">
				<Link>
					<EmailIcon className="fill-primary hover:fill-green" />
				</Link>
				<Link>
					<XSocialIcon className="fill-primary hover:fill-green" />
				</Link>
				<Link>
					<YoutubeIcon className="fill-primary hover:fill-green" />
				</Link>
				<Link>
					<LinkedInIcon className="fill-primary hover:fill-green" />
				</Link>
			</div>
		</div>
	</footer>
);
