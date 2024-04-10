import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";

export const SectionQuestions = ({ onNext }) => {
	return (
		<div className="mx-auto w-fit px-8 max-sm:max-w-[400px]">
			<h2 className="mb-2.5 text-center text-xl font-bold lg:text-start">
				Enter Details
			</h2>
			<div className="flex w-full flex-col gap-4 xl:w-[500px]">
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="name">
						Name *
					</label>
					<Input id="name" placeholder="John Doe" />
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="email">
						Email *
					</label>
					<Input id="email" placeholder="johndoe@example.com" />
					<button className="w-fit rounded-full border border-[#0069ff] px-3 py-1 text-sm text-[#0069ff]">
						Add Guests
					</button>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold">
						I want Fibery to work for: *
					</label>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<Checkbox id="myself" value="myself" />
							<label className="text-sm" htmlFor="myself">
								🥕 Myself
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="team" value="team" />
							<label className="text-sm" htmlFor="team">
								👩🏽‍🤝‍👩🏻 &lt; 10 people
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="small" value="small" />
							<label className="text-sm" htmlFor="small">
								🦄 10-50 people
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="large" value="large" />
							<label className="text-sm" htmlFor="large">
								🦅 50+ people
							</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold">
						Please, choose up to three options. You are more
						interested in: *
					</label>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<Checkbox id="strategy" value="strategy" />
							<label className="text-sm" htmlFor="strategy">
								🗻 Strategy
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="product" value="product" />
							<label className="text-sm" htmlFor="product">
								🌞 Product Management
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="engineering" value="engineering" />
							<label className="text-sm" htmlFor="engineering">
								💻 Engineering
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="feedback" value="feedback" />
							<label className="text-sm" htmlFor="feedback">
								🎣 Feedback management
							</label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="something" value="something" />
							<label className="text-sm" htmlFor="something">
								❓ Something else
							</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="message">
						Please, share anything that will help prepare for our
						meeting.
					</label>
					<textarea
						className="block w-full rounded-lg border border-gray/40 bg-white px-3.5 py-2.5 text-gray"
						id="message"
						placeholder="Your message"
						rows="1"
					></textarea>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-sm font-bold" htmlFor="workspace">
						Please, share with us the name of your Syncspace
						workspace (if any)
					</label>
					<Input id="workspace" placeholder="Your workspace name" />
				</div>
				<button
					className="inline-flex w-fit items-center justify-center rounded-full bg-[#0069ff] px-4 py-2 text-base font-bold text-white"
					onClick={onNext}
				>
					Schedule Event
				</button>
			</div>
		</div>
	);
};
