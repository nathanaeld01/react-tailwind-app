import { cn } from "../../lib/utils";

export const Link = ({ children, className, ...props }) => {
	return (
		<a className={cn(className)} href={() => false} {...props}>
			{children}
		</a>
	);
};
