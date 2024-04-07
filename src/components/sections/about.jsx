import circle from "../../assets/circle-icon.svg";
import hexagon from "../../assets/hexagon-icon.svg";
import rhombus from "../../assets/rhombus-icon.svg";
import star from "../../assets/stars-icon.svg";

export const AboutSection = () => {
	return (
		<section className="section flex flex-col gap-17">
			<div className="section-row">
				<div className="relative flex flex-col-reverse items-baseline justify-between gap-5 py-4 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-light-gray-border lg:flex-row">
					<h4 className="grow text-3.5xl font-semibold">
						✨ Syncspace — pay only for what you use
					</h4>
					<span className="">Learn more →</span>
				</div>
			</div>
			<div className="section-row">
				<p className="max-w-[95rem] text-lg font-light leading-8">
					You get a free trial for AI Assistant in text + AI Space
					Creation (first 100 requests), and AI Search (1 database).
					Then you can connect your own OpenAI API key and pay only
					for what you use (we estimate it will cost you ~$2-4 per
					month per user with heavy usage).
				</p>
				<div className="grid grid-cols-1 gap-13 pt-17 sm:grid-cols-2 lg:grid-cols-4">
					<div className="min-h-full">
						<div className="relative mb-7.5 size-25">
							<div
								className="size-25 bg-secondary-green mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center"
								style={{
									"--mask-img": `url(${circle})`,
								}}
							/>
							<img
								alt="magic wand"
								className="absolute -bottom-2.5 -right-2.5 size-20"
								src="/assets/magic-wand.webp"
							/>
						</div>
						<div className="text-base leading-6">
							Create workspace from
							<br />
							scratch with a simple prompt
						</div>
					</div>
					<div className="min-h-full">
						<div className="relative mb-7.5 size-25">
							<div
								className="size-25 bg-secondary-yellow mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center"
								style={{
									"--mask-img": `url(${hexagon})`,
								}}
							/>
							<img
								alt="robot"
								className="absolute -bottom-2.5 -right-2.5 size-20"
								src="/assets/robot.webp"
							/>
						</div>
						<div className="text-base leading-6">
							Summarize and extract
							<br />
							information automatically
						</div>
					</div>
					<div className="min-h-full">
						<div className="relative mb-7.5 size-25">
							<div
								className="size-25 bg-secondary-mint mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center"
								style={{
									"--mask-img": `url(${star})`,
								}}
							/>
							<img
								alt="vulcan hand"
								className="absolute -bottom-2.5 -right-2.5 size-20"
								src="/assets/vulcan-hand.webp"
							/>
						</div>
						<div className="text-base leading-6">
							Write and brainstorm
							<br />
							with a chat-like AI Assistant
						</div>
					</div>
					<div className="min-h-full">
						<div className="relative mb-7.5 size-25">
							<div
								className="size-25 rotate-45 bg-secondary-pink mask-[var(--mask-img)] mask-no-repeat mask-size-contain mask-position-center"
								style={{
									"--mask-img": `url(${rhombus})`,
								}}
							/>
							<img
								alt="magnifier left"
								className="absolute -bottom-2.5 -right-2.5 size-20"
								src="/assets/magnifier-left.webp"
							/>
						</div>
						<div className="text-base leading-6">
							Find relevant info
							<br />
							even if it doesn’t precisely match the search
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
