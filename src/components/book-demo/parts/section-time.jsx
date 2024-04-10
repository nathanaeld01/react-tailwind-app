import { useMemo, useState } from "react";

import { bookingDates } from "../../../lib/constants";
import { formatDate } from "../../../lib/utils";
import { Calendar } from "../../ui/calendar";
import { DemoTime } from "../time";
import { DemoTimezones } from "../timezones";

export const SectionTime = ({ onNext }) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata");
	const [selectedTime, setSelectedTime] = useState(null);

	const firstDate = bookingDates[0].date;
	const lastDate = bookingDates[bookingDates.length - 1].date;

	const results = useMemo(() => {
		return selectedDate
			? bookingDates.find(
					item =>
						new Date(item.date).getDate() ===
						new Date(selectedDate).getDate(),
				)
			: null;
	}, [selectedDate]);

	const onNextHandler = v => {
		onNext({
			...v,
			timezone: selectedTimezone,
		});
	};

	return (
		<div className="mx-auto w-fit px-8 max-sm:max-w-[400px]">
			<h2 className="mb-2.5 text-center text-xl font-bold lg:text-start">
				Select a Date and Time
			</h2>
			<div className="flex w-full flex-col max-md:items-center md:flex-row">
				<div className="flex w-fit shrink-0 flex-col">
					<Calendar
						fromMonth={firstDate}
						mode="single"
						modifierDisabled={[{ after: lastDate }]}
						onSelect={v => {
							setSelectedDate(v);
							setSelectedTime(null);
						}}
						selected={selectedDate}
						toMonth={lastDate}
					/>
					<div className="mx-auto w-full max-w-[330px] px-3">
						<p className="font-bold">Time Zone</p>
						<DemoTimezones
							selectedTimezone={selectedTimezone}
							setSelectedTimezone={setSelectedTimezone}
						/>
					</div>
				</div>
				{!!results && (
					<div className="flex w-full shrink-0 flex-col pt-3 md:w-fit">
						<h3 className="mb-2.5 leading-9 max-md:hidden">
							{formatDate(new Date(selectedDate))}
						</h3>
						<div className="flex flex-col gap-2.5 p-2.5">
							<DemoTime
								onNext={onNextHandler}
								results={results}
								selectedTime={selectedTime}
								selectedTimezone={selectedTimezone}
								setSelectedTime={setSelectedTime}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
