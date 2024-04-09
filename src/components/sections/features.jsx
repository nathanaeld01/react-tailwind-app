import { Feature, FeatureContent, FeatureHeader } from "../ui/feature";

export const FeaturesSection = () => {
	return (
		<section className="section mt-52">
			<div className="section-row">
				<div className="relative py-4 after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-light-gray-border">
					<h4 className="text-3.5xl font-semibold">
						💪-est features you get with any plan
					</h4>
				</div>
			</div>
			<div className="section-row">
				<div className="group/features mt-17 grid grid-cols-1 gap-15 md:grid-cols-2 xl:grid-cols-4">
					{/* first four */}
					<Feature
						icon="B"
						style={{
							"--mask-img": "url('/assets/icons/icon-8s.svg')",
						}}
						title="Browser Extension for Chrome"
					>
						<FeatureHeader className="bg-secondary-yellow" />
						<FeatureContent className="bg-yellow">
							Add Ideas, Insights, Competitors, and Articles from
							a Chrome web page to your Syncspace workspace in two
							clicks.
						</FeatureContent>
					</Feature>
					<Feature
						icon="F"
						style={{
							"--mask-img": "url('/assets/icons/icon-6s.svg')",
						}}
						title="Permissions & Sharing"
					>
						<FeatureHeader className="bg-secondary-green" />
						<FeatureContent className="bg-green">
							Set up granular permissions and define users' powers
							from creator to viewer.
						</FeatureContent>
					</Feature>
					<Feature
						icon="F"
						style={{
							"--mask-img": "url('/assets/icons/icon-8s.svg')",
						}}
						title="Forms"
					>
						<FeatureHeader className="bg-secondary-red" />
						<FeatureContent className="bg-red">
							Grab outside data from users, co-workers, and
							potential employees, and store it in Syncspace.
						</FeatureContent>
					</Feature>
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-3s.svg')",
						}}
						title="Custom domain & connected processes"
					>
						<FeatureHeader className="-translate-x-1 -rotate-[10deg] bg-secondary-red" />
						<FeatureContent className="-translate-x-1 -rotate-[10deg] bg-red">
							Reflect your company structure and build flexible
							models for any processes using custom entities,
							custom fields, and custom relations.
						</FeatureContent>
					</Feature>
					{/* second four */}
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-4s.svg')",
						}}
						title="Customizable Views"
					>
						<FeatureHeader className="bg-secondary-mint" />
						<FeatureContent className="bg-mint">
							Visualize your data using Board, Timeline, Table,
							List, Calendar, Feed, and Map view.
						</FeatureContent>
					</Feature>
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-4s.svg')",
						}}
						title="Collaborative Documents"
					>
						<FeatureHeader className="bg-secondary-yellow" />
						<FeatureContent className="bg-yellow">
							Mix docs with your work. Discuss ideas together in
							real time, leave comments, mention teammates, create
							tasks right from the text.
						</FeatureContent>
					</Feature>
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-4s.svg')",
						}}
						title="Charts"
					>
						<FeatureHeader className="bg-secondary-mint" />
						<FeatureContent className="bg-mint">
							Transform data into information and build powerful
							custom charts, including burn down, process
							efficiency, work importance, financial, and more.
						</FeatureContent>
					</Feature>
					<Feature
						icon="W"
						style={{
							"--mask-img": "url('/assets/icons/icon-7s.svg')",
						}}
						title="Whiteboards"
					>
						<FeatureHeader className="bg-secondary-violet" />
						<FeatureContent className="bg-violet">
							Create interactive diagrams, mindmaps, or customer
							journey maps. Brainstorm and organize ideas and
							connect them to real work.
						</FeatureContent>
					</Feature>
					{/* third four */}
					<Feature
						icon="B"
						style={{
							"--mask-img": "url('/assets/icons/icon-8s.svg')",
						}}
						title="Bi-directional links"
					>
						<FeatureHeader className="bg-secondary-yellow" />
						<FeatureContent className="bg-yellow">
							Make knowledge discoverable using bi-directional
							links. Connect feedback to insights, feature ideas
							to tasks, and more.
						</FeatureContent>
					</Feature>
					<Feature
						icon="F"
						style={{
							"--mask-img": "url('/assets/icons/icon-9s.svg')",
						}}
						title="Full-text search"
					>
						<FeatureHeader className="bg-secondary-blue" />
						<FeatureContent className="bg-blue">
							Find tasks, documents, contacts, meetings, or any
							other things using the quick full-text search.
						</FeatureContent>
					</Feature>
					<Feature
						icon="D"
						style={{
							"--mask-img": "url('/assets/icons/icon-3s.svg')",
						}}
						title="Documents and entities sharing"
					>
						<FeatureHeader className="translate-x-1 -rotate-[197deg] bg-secondary-red" />
						<FeatureContent className="translate-x-1 -rotate-[197deg] bg-red">
							Share any document or any entity (task, feature,
							project, etc). Sharing is public and the link never
							expires.
						</FeatureContent>
					</Feature>
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-4s.svg')",
						}}
						title="Changes history"
					>
						<FeatureHeader className="rotate-45 bg-secondary-mint" />
						<FeatureContent className="rotate-45 bg-mint">
							Track changes happening in documents and work
							entities (tasks, features, projects, etc) and easily
							restore the older version.
						</FeatureContent>
					</Feature>
					{/* fourth four */}
					<Feature
						icon="I"
						style={{
							"--mask-img": "url('/assets/icons/icon-0s.svg')",
						}}
						title="Integrations"
					>
						<FeatureHeader className="bg-secondary-orange" />
						<FeatureContent className="bg-orange">
							Connect Syncspace to dozens of tools, including
							Slack, GitLab, GitHub, Jira, Trello, Airtable,
							ClickUp, Discourse, HubSpot, Braintree, Intercom,
							Make, and Zapier.
						</FeatureContent>
					</Feature>
					<Feature
						icon="T"
						style={{
							"--mask-img": "url('/assets/icons/icon-5s.svg')",
						}}
						title="Templates"
					>
						<FeatureHeader className="-rotate-[105deg] bg-secondary-pink" />
						<FeatureContent className="-rotate-[105deg] bg-pink">
							Get started with User Research, Roadmapping,
							Software Development, and 20+ other processes faster
							with templates created by our team.
						</FeatureContent>
					</Feature>
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-7s.svg')",
						}}
						title="Custom formulas"
					>
						<FeatureHeader className="bg-secondary-violet -rotate-[115deg]" />
						<FeatureContent className="-rotate-[115deg] bg-violet">
							Use powerful formulas to calculate both simple and
							complex metrics for your processes. Cycle Time, Lead
							Time, Totals, Averages, you name it.
						</FeatureContent>
					</Feature>
					<Feature
						icon="A"
						style={{
							"--mask-img": "url('/assets/icons/icon-8s.svg')",
						}}
						title="Automation Rules"
					>
						<FeatureHeader className="rotate-[70deg] bg-secondary-yellow" />
						<FeatureContent className="rotate-[70deg] bg-yellow">
							Automate repetitive actions, do less manual work,
							and keep all the data consistent using Syncspace
							Automation rules.
						</FeatureContent>
					</Feature>
					{/* fifth four */}
					<Feature
						icon="C"
						style={{
							"--mask-img": "url('/assets/icons/icon-9s.svg')",
						}}
						title="Custom Action Buttons"
					>
						<FeatureHeader className="bg-secondary-blue" />
						<FeatureContent className="bg-blue">
							Replace the same set of actions you do in Syncspace
							periodically with a single click on an automated
							Action Button.
						</FeatureContent>
					</Feature>
					<Feature
						icon="S"
						style={{
							"--mask-img": "url('/assets/icons/icon-0s.svg')",
						}}
						title="Smart Folders"
					>
						<FeatureHeader className="bg-secondary-orange" />
						<FeatureContent className="bg-orange">
							Show filtered and sorted list of entities in
							Syncspace navigation menu and create Views inside
							entities using Smart Folders.
						</FeatureContent>
					</Feature>
					<Feature
						icon="D"
						style={{
							"--mask-img": "url('/assets/icons/icon-3s.svg')",
						}}
						title="Data import and export"
					>
						<FeatureHeader className="-translate-x-[1px] translate-y-1 -rotate-[105deg] bg-secondary-red" />
						<FeatureContent className="-translate-x-[1px] translate-y-1 -rotate-[105deg] bg-red">
							Import data into Syncspace from a CSV file. Select
							fields to import and set required field types.
						</FeatureContent>
					</Feature>
					<Feature
						icon="A"
						style={{
							"--mask-img": "url('/assets/icons/icon-4s.svg')",
						}}
						title="API"
					>
						<FeatureHeader className="rotate-[105deg] bg-secondary-mint" />
						<FeatureContent className="rotate-[105deg] bg-mint">
							Integrate Syncspace with external systems you use,
							create powerful workflows, and automate routine
							tasks using Syncspace API.
						</FeatureContent>
					</Feature>
				</div>
			</div>
		</section>
	);
};
