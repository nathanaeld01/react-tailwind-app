import { AnimatePresence, motion } from "framer-motion";
import { cloneElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ModalContext, useModal } from "../../context/modal-context";
import { cn } from "../../lib/utils";

const Modal = ({ children, onClose }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (!active) onClose?.();
	}, [active, onClose]);

	return (
		<ModalContext.Provider value={{ active, setActive }}>
			{children}
		</ModalContext.Provider>
	);
};

const ModalOverlay = () => {
	const { setActive } = useModal();

	return (
		<motion.div
			animate={{ opacity: 1 }}
			className="fixed left-0 top-0 z-9 bg-black/40 size-screen"
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			onClick={() => setActive(false)}
		/>
	);
};

const ModalTrigger = ({ children }) => {
	const { setActive } = useModal();

	return cloneElement(children, { onClick: () => setActive(true) });
};

const ModalClose = () => {
	const { setActive } = useModal();

	return (
		<button
			className="fixed right-2 top-2 z-[51] size-5 border-0 bg-transparent text-white outline-none"
			onClick={() => setActive(false)}
		>
			<i class="fa-solid fa-xmark text-xl"></i>
		</button>
	);
};

const ModalContent = ({ children, className }) => {
	const { active } = useModal();

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", active);
	}, [active]);

	return createPortal(
		<AnimatePresence mode="wait">
			{active && (
				<>
					<ModalClose />
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className={cn(
							"fixed inset-0 z-10 m-auto h-fit max-h-[85dvh] w-fit max-w-6xl overflow-hidden overflow-y-auto rounded-lg bg-white md:max-h-[70dvh]",
							className,
						)}
						exit={{ opacity: 0, y: -100 }}
						initial={{ opacity: 0, y: -100 }}
						transition={{
							duration: 0.5,
							type: "tween",
						}}
					>
						{children}
					</motion.div>
					<ModalOverlay />
				</>
			)}
		</AnimatePresence>,
		document.querySelector("#root"),
	);
};

export { Modal, ModalContent, ModalTrigger };
