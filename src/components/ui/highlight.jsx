import { useState } from "react";

import {
	HighlightContext,
	useHighlight,
} from "../../context/highlight-context";
import { cn } from "../../lib/utils";
import { Link } from "../ui/link";

const HighlightContent = ({ children }) => {
	const [color, setColor] = useState(null);

	return (
		<HighlightContext.Provider value={{ setColor }}>
			<div
				className={cn(
					"highlight-container w-full rounded px-14 py-7.5 text-xl font-light transition-[background-color] duration-300",
					!!color && color,
				)}
			>
				{children}
			</div>
		</HighlightContext.Provider>
	);
};

const Highlight = ({ children, color }) => {
	const { setColor } = useHighlight();

	const enterHandler = () => setColor(color);
	const leaveHandler = () => setColor(null);

	return (
		<Link
			className={cn(
				"highlight relative z-2 inline-block h-6 border-b-2 hover:no-underline",
				color,
			)}
			onMouseEnter={enterHandler}
			onMouseLeave={leaveHandler}
		>
			{children}
		</Link>
	);
};

export { Highlight, HighlightContent };
