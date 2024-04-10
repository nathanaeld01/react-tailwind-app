import { getBookingDate } from "../../../lib/utils";

export const SectionSubmitted = ({ timingDetails }) => {
	return (
		<div className="mx-auto w-full max-w-3xl py-7.5">
			<div className="mx-auto flex w-full max-w-[450px] flex-col text-center">
				<div className="mb-4">
					<img
						alt="Demo Member"
						className="mx-auto size-16 rounded-full"
						src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/26548097/77fda4c8.jpg"
					/>
				</div>
				<h1 className="mb-4 flex w-full items-center justify-center text-xl font-bold">
					<i class="fa-solid fa-circle-check mr-3.5 text-green"></i>
					You are scheduled
				</h1>
				<div className="mb-6 w-full">
					<p>
						A calendar invitation has been sent to your email
						address.
					</p>
					<button className="mt-4 inline-flex items-center justify-center rounded-full border border-gray px-3 py-1 text-sm leading-6 text-gray">
						Open Invitation
						<i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
					</button>
				</div>
				<div className="rounded-lg border border-gray/30 p-5">
					<h2 className="mb-3 text-start text-xl font-bold">
						Syncspace Demo
					</h2>
					<div className="mb-3 flex items-center justify-start gap-4 font-bold text-gray/60">
						<i class="fa-regular fa-user text-xl"></i>
						<span>Kseniya Piotuh</span>
					</div>
					<div className="mb-3 flex items-center justify-start gap-4 font-bold text-gray/60">
						<i class="fa-regular fa-calendar text-xl"></i>
						<span>
							{getBookingDate(
								timingDetails.time,
								timingDetails.date,
							)}
						</span>
					</div>
					<div className="mb-3 flex items-center justify-start gap-4 font-bold text-gray/60">
						<i class="fa-solid fa-globe text-xl"></i>
						<span>{timingDetails.timezone} Timing</span>
					</div>
					<div className="mb-3 flex items-center justify-start gap-4 font-bold text-gray/60">
						<i class="fa-solid fa-video text-xl"></i>
						<span>Web conferencing details to follow.</span>
					</div>
				</div>
			</div>
		</div>
	);
};
