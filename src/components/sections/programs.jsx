import {
	Program,
	ProgramContent,
	ProgramIcon,
	ProgramImage,
	ProgramTitle,
} from "../ui/program";

export const ProgramsSection = () => {
	return (
		<section className="section mt-52">
			<div className="section-row grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
				<Program className="bg-tertiary-mint">
					<ProgramIcon className="bg-secondary-mint group-hover/program:bg-mint">
						<ProgramImage
							alt="Polina"
							className="inset-x-0 bottom-0 mx-auto h-auto w-12"
							image="/assets/polina.webp"
						/>
					</ProgramIcon>
					<ProgramTitle>Concierge program</ProgramTitle>
					<ProgramContent>
						From setting up your account and installing templates to
						adding data and creating custom views.
					</ProgramContent>
				</Program>
				<Program className="bg-tertiary-orange">
					<ProgramIcon className="bg-secondary-orange group-hover/program:bg-orange">
						<ProgramImage
							alt="Handshake"
							className="-bottom-1.5 -left-1.5 size-16"
							image="/assets/handshake.webp"
						/>
					</ProgramIcon>
					<ProgramTitle>Partners program</ProgramTitle>
					<ProgramContent>
						Build a steady recurring revenue stream and help your
						customers work smarter with Fibery as their work and
						knowledge hub.
					</ProgramContent>
				</Program>
				<Program className="bg-tertiary-yellow">
					<ProgramIcon className="bg-secondary-yellow group-hover/program:bg-yellow">
						<ProgramImage
							alt="Money Face"
							className="-bottom-1.5 -left-1.5 size-16"
							image="/assets/money-face.webp"
						/>
					</ProgramIcon>
					<ProgramTitle>Startup program</ProgramTitle>
					<ProgramContent>
						Being a startup ourselves, we understand your
						struggle,and so we offer 6 months of Fibery for free if
						your company has fewer than 30 employees.
					</ProgramContent>
				</Program>
			</div>
		</section>
	);
};
