import { cn } from "../../lib/utils";

export const Link = ({ children, className, ...props }) => (
	<a className={cn(className)} href={() => false} {...props}>
		{children}
	</a>
);
