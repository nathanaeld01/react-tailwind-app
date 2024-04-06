import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import "../../styles/button.css";

const buttonStyles = cva("btn", {
	defaultVariants: {
		variant: "primary",
	},
	variants: {
		size: {
			sm: "btn-sm",
		},
		text: {
			md: "btn-text-md",
		},
		variant: {
			primary: "btn-primary",
			secondary: "btn-secondary",
		},
	},
});

const Button = ({
	className,
	size,
	text,
	type = "button",
	variant,
	...props
}) => {
	return (
		<button
			className={cn(buttonStyles({ className, size, text, variant }))}
			type={type}
			{...props}
		/>
	);
};

export { Button, buttonStyles };
