import { Clock9Icon } from "lucide-react";
import { useMemo, useState } from "react";

import { bookingDates } from "../../../lib/constants";
import { cn, formatDate } from "../../../lib/utils";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Modal, ModalContent, ModalTrigger } from "../../ui/modal";
import { DemoTime } from "./time";
import { DemoTimezones } from "./timezones";

export const BookDemo = ({ className }) => {
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

	return (
		<Modal>
			<ModalTrigger>
				<Button
					className={cn("max-sm:w-full", className)}
					size="sm"
					text="md"
					variant="secondary"
				>
					Get a demo
				</Button>
			</ModalTrigger>
			<ModalContent className="flex flex-col max-md:w-full xl:flex-row">
				<div className="flex flex-col border-gray/10 max-xl:border-b xl:border-r">
					<div className="border-b border-b-gray/10 p-4 text-center text-2xl font-bold lg:p-6">
						<img
							alt="Syncspace"
							className="mx-auto h-12"
							src="/logo.png"
						/>
					</div>
					<div className="h-full p-6">
						<h2 className="mb-6 text-center text-2xl font-semibold">
							Syncspace Demo
						</h2>
						<div className="mx-auto mb-5 flex max-w-[340px] items-center gap-2.5 px-6 text-start font-bold text-gray/60">
							<Clock9Icon className="size-5" />
							45 mins
						</div>
						<div className="mx-auto max-w-[340px] px-6 text-gray/60">
							Book a meeting with a product expert. We've helped
							hundreds of companies overcome product management
							challenges.
						</div>
					</div>
				</div>
				<div className="py-6">
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
										setSelectedTimezone={
											setSelectedTimezone
										}
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
				</div>
			</ModalContent>
		</Modal>
	);
};
