import { getBookingDate } from "../../lib/utils";

export const BookingDetails = ({ timingDetails }) => {
	return (
		<>
			<div className="mx-auto mb-5 flex flex-col items-center gap-2 xl:items-start">
				<div className="flex max-w-[340px] items-center gap-2.5 px-6 text-start font-bold text-gray/60">
					<i class="fa-regular fa-clock text-xl"></i>
					45 mins
				</div>
				{timingDetails?.date && timingDetails?.time && (
					<div className="flex max-w-[340px] items-center gap-2.5 px-6 text-start font-bold text-gray/60">
						<i class="fa-regular fa-calendar text-xl"></i>
						{getBookingDate(timingDetails.time, timingDetails.date)}
					</div>
				)}
				{timingDetails?.timezone && (
					<div className="flex max-w-[340px] items-center gap-2.5 px-6 text-start font-bold text-gray/60">
						<i class="fa-solid fa-globe text-xl"></i>
						{timingDetails.timezone} Timing
					</div>
				)}
			</div>
		</>
	);
};
