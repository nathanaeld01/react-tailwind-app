import { motion } from "framer-motion";

import { cn, formatTime } from "../../../lib/utils";

export const DemoTime = ({
	results,
	selectedDate,
	selectedTime,
	selectedTimezone,
	setSelectedTime,
}) => {
	return results
		? results.times.map(time => {
				const active = selectedTime === time;

				const date = new Date(results.date + " " + time);

				return (
					<div className="flex w-full gap-2.5 overflow-hidden overflow-y-auto md:w-44">
						<motion.button
							animate={{
								width: active ? "calc(50% - 5px)" : "100%",
							}}
							className={cn(
								"h-13 shrink-0 cursor-pointer overflow-hidden rounded font-bold",
								active
									? "cursor-default bg-black/60 text-white"
									: "border border-[#0069ff] text-[#0069ff]",
							)}
							disabled={active}
							onClick={() => setSelectedTime(time)}
						>
							{formatTime(date, selectedTimezone)}
						</motion.button>
						{active && (
							<motion.button
								animate={{
									width: active ? "calc(50% - 5px)" : 0,
								}}
								className="h-13 shrink-0 cursor-pointer overflow-hidden rounded bg-[#0069ff] font-bold text-white"
								exit={{ width: 0 }}
							>
								Next
							</motion.button>
						)}
					</div>
				);
			})
		: null;
};
