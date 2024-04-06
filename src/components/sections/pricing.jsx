import {
	PriceCard,
	PriceChecker,
	PriceDiscount,
	PriceSwitcher,
} from "../price-checker";

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
				<div className="flex flex-col flex-wrap max-lg:flex-nowrap max-lg:gap-5 md:flex-row">
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
			</section>
		</PriceChecker>
	);
};
