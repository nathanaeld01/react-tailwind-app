import { useState } from "react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Modal, ModalContent, ModalTrigger } from "../ui/modal";
import { BookingDetails } from "./details";
import { SectionQuestions } from "./parts/section-questions";
import { SectionSubmitted } from "./parts/section-submitted";
import { SectionTime } from "./parts/section-time";

export const BookDemo = ({ className }) => {
	const [formPart, setFormPart] = useState("timing");
	const [timingDetails, setTimingDetails] = useState({});

	const timeSectionHandler = details => {
		setTimingDetails(details);
		setFormPart("question");
	};

	const questionSectionHandler = () => {
		setFormPart("submitted");
	};

	const backHandler = () => {
		setFormPart("timing");
		setTimingDetails({});
	};

	return (
		<Modal
			onClose={() => {
				setFormPart("timing");
				setTimingDetails({});
			}}
		>
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
			<ModalContent
				className={cn(
					"flex flex-col max-md:w-full xl:flex-row",
					formPart === "submitted" && "w-full",
				)}
			>
				{formPart !== "submitted" ? (
					<>
						<div className="flex flex-col border-gray/10 max-xl:border-b xl:border-r">
							<div className="relative border-b border-b-gray/10 p-4 text-center text-2xl font-bold lg:p-6">
								{formPart === "question" && (
									<button
										className="absolute inset-y-0 left-5 z-2 my-auto size-11 rounded-full border border-gray/10 font-bold text-[#0069ff] hover:bg-[#0069ff]/30"
										onClick={backHandler}
									>
										<i class="fa-solid fa-arrow-left"></i>
									</button>
								)}
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
								<BookingDetails timingDetails={timingDetails} />
								<div className="mx-auto max-w-[340px] px-6 text-gray/60">
									Book a meeting with a product expert. We've
									helped hundreds of companies overcome
									product management challenges.
								</div>
							</div>
						</div>
						<div className="py-6 xl:overflow-y-auto">
							{formPart === "timing" && (
								<SectionTime onNext={timeSectionHandler} />
							)}
							{formPart === "question" && (
								<SectionQuestions
									onNext={questionSectionHandler}
								/>
							)}
						</div>
					</>
				) : (
					<SectionSubmitted timingDetails={timingDetails} />
				)}
			</ModalContent>
		</Modal>
	);
};
