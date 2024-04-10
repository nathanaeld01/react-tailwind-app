import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import "../../styles/calendar.css";

export const Calendar = ({
	className,
	classNames,
	modifierDisabled,
	...props
}) => {
	return (
		<DayPicker
			className={cn("calendar p-3", className)}
			classNames={{
				caption: "caption",
				caption_label: "caption-label",
				cell: "cell",
				day: "day",
				day_disabled: "day-disabled",
				day_selected: "day-selected",
				day_today: "day-today",
				head_cell:
					"text-gray rounded-md w-11 font-normal text-xs uppercase",
				head_row: "flex",
				nav: "nav",
				nav_button: "nav-btn",
				nav_button_next: "nav-btn-next",
				nav_button_previous: "nav-btn-prev",
				table: "table",
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => (
					<i class="fa-solid fa-chevron-left text-xl"></i>
				),
				IconRight: ({ ...props }) => (
					<i class="fa-solid fa-chevron-right text-xl"></i>
				),
			}}
			disabledDays={[new Date("sunday"), new Date("saturday")]}
			modifiers={{
				disabled: [
					{ dayOfWeek: [0, 6] },
					{ before: new Date() },
					...modifierDisabled,
				],
			}}
			weekStartsOn={1}
			{...props}
		/>
	);
};
