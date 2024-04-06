import {
	PriceCard,
	PriceChecker,
	PriceDiscount,
	PriceSwitcher,
} from "../price-checker";
import { Highlight, HighlightContent } from "../ui/highlight";

export const PricingSection = () => {
	return (
		<PriceChecker>
			<section className="px-[8%] pb-35 2xl:px-[calc(50%-616px)] xl:px-[10%]">
				<h1 className="font-exo text-4.5xl leading-[1.24] max-md:min-h-20 md:pt-7.5 md:text-5xl xl:text-8xl">
					Pricing
				</h1>
				<div className="flex flex-col items-start justify-between pb-10 pt-1 lg:flex-row xl:pt-2">
					<p className="text-xl font-normal">
						Start your 14-day free trial. No CC required.
					</p>
					<div className="flex flex-col items-start justify-between max-lg:pt-12 lg:max-xl:-mt-9 xl:mt-0 xl:flex-row xl:items-center">
						<PriceDiscount />
						<PriceSwitcher />
					</div>
				</div>
				<div className="mb-7.5 flex flex-col flex-wrap max-lg:flex-nowrap max-lg:gap-5 md:flex-row">
					<PriceCard
						className="hover:bg-tertiary-green lg:border-r lg:border-r-[#F2F2F2]"
						price={{ annually: 10, monthly: 12 }}
						title="Standard 🤝"
					>
						Version History: 90 days
						<br />
						Read-only users: unlimited
					</PriceCard>
					<PriceCard
						className="hover:bg-tertiary-pink"
						price={{ annually: 17, monthly: 20 }}
						title="Pro 🎸"
					>
						Version history: unlimited,
						<br />
						Read-only users: unlimited,
						<br />
						Group permissions, SAML + SSO,
						<br />
						No Fibery branding on forms, Extra-caring support
					</PriceCard>
				</div>
				<div className="flex flex-col">
					<HighlightContent>
						<span className="font-semibold">🤑 100% free</span> for{" "}
						<Highlight color="pink">startups</Highlight> with less
						than 30 employees,{" "}
						<Highlight color="green">
							open-source projects
						</Highlight>
					</HighlightContent>
					<div className="mx-auto h-px w-[calc(100%-6.875rem)] bg-[#E5E8EB]" />
					<HighlightContent>
						<span className="font-semibold">💸 50% discount</span>{" "}
						for{" "}
						<Highlight color="violet">
							nonprofit organizations
						</Highlight>
						,{" "}
						<Highlight color="mint">
							educational organizations
						</Highlight>
						,{" "}
						<Highlight color="yellow">
							Ukrainian companies
						</Highlight>{" "}
						(till January 1, 2030)
					</HighlightContent>
				</div>
			</section>
		</PriceChecker>
	);
};
