import * as SwitchPrimitive from "@radix-ui/react-switch";

export const Switch = ({ checked, defaultChecked, name, onChange }) => (
	<SwitchPrimitive.Root
		checked={checked}
		className="h-5 w-8 rounded-full border border-[#2D3945] bg-[#2D3945] px-1 transition-all duration-300"
		defaultChecked={defaultChecked}
		name={name}
		onCheckedChange={onChange}
	>
		<SwitchPrimitive.Thumb className="pointer-events-none block size-3 rounded-full bg-white transition-transform data-[state=checked]:translate-x-2.5 data-[state=unchecked]:translate-x-0" />
	</SwitchPrimitive.Root>
);
