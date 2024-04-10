import { FeatureContext, useFeature } from "../../context/feature-context";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Link } from "./link";

const Content = ({ children }) => (
	<div class="ExpandedCardLink_hiddenBlock__n6QP6">
		<p className="mb-7 font-light">{children}</p>
		<Button>
			<span>Learn more</span>
		</Button>
	</div>
);

const Feature = ({ children, icon, title, ...props }) => (
	<FeatureContext.Provider value={{ icon, title }}>
		<div className="group/feature relative" {...props}>
			{children}
		</div>
	</FeatureContext.Provider>
);

const FeatureHeader = ({ className }) => {
	const { icon, title } = useFeature();

	return (
		<div class="relative z-1 hidden lg:block">
			<div className="flex flex-col">
				<div className="relative mb-3 size-9 text-center font-semibold leading-[2.87rem] text-white transition-opacity duration-100 ease-[cubic-bezier(.32,0,.67,0)] group-hover/features:opacity-50">
					<div
						className={cn(
							"absolute z-1 size-full mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center",
							className,
						)}
					/>
					<div className="absolute z-2 size-full">{icon}</div>
				</div>
				<h2 className="mb-5.5 text-2xl font-medium">
					<span>{title}</span>
				</h2>
			</div>
		</div>
	);
};

const FeatureContent = ({ children, className }) => {
	const { icon, title } = useFeature();

	return (
		<Link className="static -ml-12 -mt-10 block w-[calc(100%+6rem)] bg-white px-12 pb-11 pt-10 hover:no-underline lg:absolute lg:left-0 lg:top-0 lg:z-1 lg:rounded-lg lg:opacity-0 lg:ring-4 lg:ring-black lg:group-hover/feature:z-3 lg:group-hover/feature:opacity-100">
			<div className="flex flex-col">
				<div className="relative mb-3 size-9 text-center font-semibold leading-[2.87rem] text-white transition-opacity duration-100 ease-[cubic-bezier(.32,0,.67,0)] max-lg:group-hover/feature:!opacity-100 max-lg:group-hover/features:opacity-50">
					<div
						className={cn(
							"absolute z-1 size-full mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center",
							className,
						)}
					/>
					<div className="absolute z-2 size-full">{icon}</div>
				</div>
				<h2 className="mb-5.5 text-2xl font-medium">
					<span>{title}</span>
				</h2>
			</div>
			<Content>{children}</Content>
		</Link>
	);
};

export { Feature, FeatureContent, FeatureHeader };
