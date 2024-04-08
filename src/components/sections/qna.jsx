import { Link } from "../ui/link";
import { Question } from "../ui/question";

export const QNASection = () => {
	return (
		<section className="section mt-52">
			<div className="section-row">
				<h2 className="font-exo text-4.5xl font-medium sm:text-5xl md:text-6xl">
					QNA
				</h2>
			</div>
			<div className="section-row mt-17 flex flex-col">
				<Question title="How long is the trial period?">
					It lasts for 14 days starting from the moment you signed up.
					Fibery is powerful and demands time to explore. So you need
					time to procrastinate, receive some reminders, get into
					Fibery again, and, finally, "get" it. We feel that you can
					do it in 14-days. If you'd like to have a fast learning
					curve, we really suggest to take advantage of our{" "}
					<Link className="underline">concierge support</Link>.
				</Question>
				<Question title="Can we access our workspace after the trial?">
					Yes, but in a read-only mode. Once you upgrade to a paid
					plan, you will be able to add and edit entities again.
				</Question>
				<Question title="Is there a free trial of Fibery AI? How much does it cost?">
					<p>
						Fibery AI integrates Fibery with GPT-3.5 OpenAI. You can
						try Fibery AI in text and space creation for free — and
						you have 100 requests. Then you'll need to set up your
						OpenAI token — here is a quick guide to help you do it.
					</p>
					<br />
					<p>
						The cost will depend on the quantity of use, we estimate
						that it will cost you ~$2-4 per month per user with
						heavy usage. Note: if you use AI in Automations, you can
						spend more money in your OpenAI account way faster. 😅
					</p>
				</Question>
				<Question title="What does the 'extra-caring' support mean?">
					We are happy to answer your emails and Intercom messages
					regardless of your pricing plan. Paid plans also include 1:1
					consulting over Zoom — if you are not sure how to organize
					your process in Fibery, we will figure it out together. We
					would also love to assist you with onboarding new team
					members.
				</Question>
				<Question title="What about this free 6 months for startups?">
					Get 6 months of Fibery for free if your company has fewer
					than 30 employees.
					<br />
					Ditch those scattered spreadsheets — and let’s grow
					together.{" "}
					<Link className="underline">Learn more & apply</Link>
				</Question>
				<Question title="What happens if we invite/deactivate users when on a paid plan?">
					<p>
						When you invite a new user, we charge you proportionally
						to the time left in the billing cycle. For example, if
						you pay annually and there are six months left until the
						next payment, the prorated amount is $10*(6/12)*12=$60.
					</p>
					<br />
					<p>
						When you deactivate a user, the unspent amount will be
						deducted from your next bill.
					</p>
				</Question>
				<Question title="What payment methods do you accept?">
					We accept all major credit cards. If you'd like to pay via a
					bank transfer, please contact us via Intercom — we will try
					to make it happen.
				</Question>
				<Question title="How do we pay for multiple workspaces?">
					If your organization owns several workspaces that share
					users, contact us via Intercom for a custom invoice. We
					don't want to charge you for the same users twice.
				</Question>
				<Question title="How is the payment being processed?">
					We use Braintree to process your payment. Braintree handles
					billions of dollars in transactions and is trusted by
					companies like Uber, Dropbox, and GitHub. We do not store or
					handle your credit card information directly.
				</Question>
				<Question title="Do you offer refunds?">
					We don't offer refunds, sorry.
				</Question>
				<Question title="Can we cancel our paid plan?">
					Sure, feel free to cancel your subscription at any time. All
					the benefits of the paid plan will remain till the end of
					your billing cycle. Once the billing cycle is over, we won't
					charge you again, and your workspace will switch into
					read-only mode.
				</Question>
			</div>
			<div className="section-row pb-17 pt-12">
				<span className="font-semibold">
					Have a question left unanswered?
				</span>
				<p>
					Feel free to chat with us via Intercom or send an email to
					<Link className="underline">new@fibery.io</Link>
				</p>
			</div>
		</section>
	);
};
