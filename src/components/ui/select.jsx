import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";

import { cn } from "../../lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef(({ children, className, ...props }, ref) => (
	<SelectPrimitive.Trigger
		className={cn(
			"flex h-10 w-full items-center justify-between rounded-md border border-gray bg-white px-3 py-2 text-sm placeholder:text-gray focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
			className,
		)}
		ref={ref}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<i class="fa-solid fa-chevron-down text-base opacity-50"></i>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));

const SelectScrollUpButton = forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		className={cn(
			"flex cursor-default items-center justify-center py-1",
			className,
		)}
		ref={ref}
		{...props}
	>
		<i class="fa-solid fa-chevron-up text-base"></i>
	</SelectPrimitive.ScrollUpButton>
));

const SelectScrollDownButton = forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		className={cn(
			"flex cursor-default items-center justify-center py-1",
			className,
		)}
		ref={ref}
		{...props}
	>
		<i class="fa-solid fa-chevron-down text-base"></i>
	</SelectPrimitive.ScrollDownButton>
));

const SelectContent = forwardRef(
	({ children, className, position = "popper", ...props }, ref) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				className={cn(
					"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray shadow-md",
					position === "popper" &&
						"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
					className,
				)}
				position={position}
				ref={ref}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cn(
						"p-1",
						position === "popper" &&
							"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
					)}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
);

const SelectLabel = forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		className={cn(
			"px-5 pb-1 pt-2.5 text-sm font-bold uppercase",
			className,
		)}
		ref={ref}
		{...props}
	/>
));

const SelectItem = forwardRef(({ children, className, ...props }, ref) => (
	<SelectPrimitive.Item
		className={cn(
			"flex cursor-pointer items-center bg-white py-2 pl-8 pr-5 text-sm text-gray hover:bg-[#0069ff]/5",
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<i class="fa-solid fa-check text-base"></i>
			</SelectPrimitive.ItemIndicator>
		</span>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));

const SelectSeparator = forwardRef(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		className={cn("bg-muted -mx-1 my-1 h-px", className)}
		ref={ref}
		{...props}
	/>
));

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
