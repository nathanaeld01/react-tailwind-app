import { cn } from "../../lib/utils";

export const Input = ({ className, ...props }) => {
	return (
		<input
			className={cn(
				"block w-full appearance-none rounded-lg border border-gray/40 bg-white px-3.5 py-2.5 text-gray",
				className,
			)}
			{...props}
		/>
	);
};
