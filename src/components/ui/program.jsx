import { cn } from "../../lib/utils";
import { Link } from "./link";

const Program = ({ children, className }) => {
	return (
		<Link
			className={cn(
				"group/program relative flex size-full min-h-full flex-col items-start justify-start overflow-hidden rounded-lg border-2 border-transparent px-14 pb-17 pt-10 text-primary transition-all duration-200 hover:border-primary hover:bg-white hover:no-underline hover:ring-2 hover:ring-primary",
				className,
			)}
		>
			{children}
		</Link>
	);
};

const ProgramIcon = ({ children, className }) => {
	return (
		<div className="relative mb-9 mt-2 size-20">
			<div
				className={cn(
					"size-20 rounded-full transition-all duration-300 ease-linear",
					className,
				)}
			/>
			{children}
		</div>
	);
};

const ProgramImage = ({ alt, className, image }) => (
	<img alt={alt} className={cn("absolute z-2", className)} src={image} />
);

const ProgramTitle = ({ children }) => {
	return <h3 className="mb-4 text-2xl font-bold">{children}</h3>;
};

const ProgramContent = ({ children }) => {
	return <p className="mt-5 text-base font-light">{children}</p>;
};

export { Program, ProgramContent, ProgramIcon, ProgramImage, ProgramTitle };
