import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

import { cn } from "../../lib/utils";
import "../../styles/question.css";

const Question = ({ children, title }) => {
	const [active, setActive] = useState(false);
	const contentRef = useRef();

	const height = useMemo(() => {
		return active ? contentRef.current?.clientHeight : 0;
	}, [active]);

	return (
		<div className="overflow-hidden border-b border-b-light-gray-border">
			<h3
				className={cn(
					"question-chevron relative cursor-pointer py-5 pr-15 text-xl transition-[font-weight] duration-200",
					active && "active font-semibold",
				)}
				onClick={() => setActive(prev => !prev)}
			>
				{title}
			</h3>
			<motion.div animate={{ height }} className="h-0 overflow-hidden">
				<p className="py-5 text-[#132331]" ref={contentRef}>
					{children}
				</p>
			</motion.div>
		</div>
	);
};

export { Question };
