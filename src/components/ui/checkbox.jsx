import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";

import { cn } from "../../lib/utils";

const Checkbox = forwardRef(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		className={cn(
			"peer size-4 shrink-0 rounded-sm border border-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-[#0068ff]",
			className,
		)}
		ref={ref}
		{...props}
	>
		<CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
			<i class="fa-solid fa-check text-sm leading-none"></i>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));

export { Checkbox };
