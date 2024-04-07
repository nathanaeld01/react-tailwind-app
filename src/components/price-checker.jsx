import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { PriceContext, usePrice } from "../context/price-context";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const PriceChecker = ({ children }) => {
	const [isPriceAnnual, setIsPriceAnnual] = useState(true);

	return (
		<PriceContext.Provider value={{ isPriceAnnual, setIsPriceAnnual }}>
			{children}
		</PriceContext.Provider>
	);
};

const PriceDiscount = () => {
	const { isPriceAnnual } = usePrice();

	return (
		<div
			className={cn(
				"mr-3.5 inline-block rounded bg-[#9FF9E8] px-2.5 text-xs leading-6 transition-opacity duration-200 max-xl:mb-2.5",
				isPriceAnnual ? "opacity-100" : "opacity-10",
			)}
		>
			Save 15%
		</div>
	);
};

const PriceSwitcher = () => {
	const { isPriceAnnual, setIsPriceAnnual } = usePrice();

	return (
		<div className="flex items-center gap-4">
			<label
				className={cn(
					"w-30 cursor-pointer text-xl transition-all duration-300",
					isPriceAnnual ? "font-semibold" : "font-light",
				)}
				onClick={() => setIsPriceAnnual(true)}
			>
				Pay Annually
			</label>
			<Switch
				checked={!isPriceAnnual}
				onChange={() => setIsPriceAnnual(!isPriceAnnual)}
			/>
			<label
				className={cn(
					"w-30 cursor-pointer text-xl transition-all duration-300",
					!isPriceAnnual ? "font-semibold" : "font-light",
				)}
				onClick={() => setIsPriceAnnual(false)}
			>
				Pay Monthly
			</label>
		</div>
	);
};

const PriceCard = ({ children, className, price, title }) => {
	const { isPriceAnnual } = usePrice();

	const count = useMotionValue(
		isPriceAnnual ? price.annually : price.monthly,
	);
	const currentPrice = useTransform(count, value => {
		return value.toFixed(0);
	});

	useEffect(() => {
		const newCount = isPriceAnnual ? price.annually : price.monthly;
		animate(count, newCount, {
			duration: 0.375,
			onUpdate: latest => latest.toFixed(0),
		});
	}, [count, price, isPriceAnnual]);

	return (
		<div
			className={cn(
				"relative flex flex-1 shrink-0 flex-col gap-12 border border-[#F2F2F2] px-14 py-12 transition-all duration-300 lg:border-0 xl:flex-row",
				className,
			)}
		>
			<div className="shrink-0">
				<div className="relative mb-4.5 whitespace-nowrap text-3xl font-semibold leading-none">
					<span>{title}</span>
				</div>
				<div className="mb-11 flex">
					<span className="mb-1.5 mr-4 text-3.5xl font-semibold leading-none">
						$<motion.span>{currentPrice}</motion.span>
					</span>
					<div className="px-1 font-exo text-xs leading-4">
						per user, per month
						<br />
						billed monthly
					</div>
				</div>
				<Button size="sm" text="md">
					Start your free trial
				</Button>
			</div>
			<div className="text-sm">
				<span className="text-wrap">{children}</span>
			</div>
		</div>
	);
};

export { PriceCard, PriceChecker, PriceDiscount, PriceSwitcher };
