"use client";

import { motion } from "motion/react";

const FlowerPetal = ({ style }: { style?: React.CSSProperties }) => (
	<div className="flower-petal" style={style} />
);

export default function Home() {
	const renderPetals = () => {
		return [...Array(20)].map((_, i) => (
			<FlowerPetal
				key={i}
				style={{
					left: `${Math.random() * 100}%`,
					animationDelay: `${Math.random() * 15}s`,
					animationDuration: `${10 + Math.random() * 10}s`,
				}}
			/>
		));
	};

	return (
		<>
			<div className="petals-container">{renderPetals()}</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}
				className="fixed inset-0 z-0"
				style={{
					backgroundImage: 'url("/bg6.png")',
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			<div className="font-playfair flex min-h-screen items-start mt-[32vh] lg:mt-0 lg:items-center justify-center p-4 sm:p-20">
				<main className="flex flex-col mr-5 lg:mt-10 mt-3 gap-6 sm:gap-8 text-center pb-1">
					<ul className="flex flex-col tracking-tighter">
						<li className="overflow-hidden text-6xl font-playfair font-bold text-5xl lg:text-6xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								DiceCTF
							</motion.h1>
						</li>
						<li className="overflow-hidden text-5xl font-playfair font-bold text-4xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								x
							</motion.h1>
						</li>

						<li className="overflow-hidden text-6xl font-playfair font-bold text-5xl lg:text-6xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
							>
								QuendCon
							</motion.h1>
						</li>
					</ul>

					<ul className="flex flex-col tracking-tighter gap-2">
						<li className="overflow-hidden">
							<motion.h2
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
								className="text-2xl text-blue-400"
							>
								July 10 + 11 2025
							</motion.h2>
						</li>
						<li className="overflow-hidden">
							<motion.h2
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								transition={{ delay: 0.5, duration: 0.2, ease: "easeOut" }}
								className="text-2xl text-green-300"
							>
								Brooklyn, NY
							</motion.h2>
						</li>
					</ul>
				</main>
			</div>
		</>
	);
}

const styles = `
	.petals-container {
		position: fixed;
		top: -100px;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
		overflow: hidden;
	}

.flower-petal {
    position: absolute;
    width: 15px; /* Width of the petal */
    height: 20px; /* Height of the petal */
    background: rgba(255, 0, 255, 0.5); /* Color of the petal */
    border-radius: 90% 90% 0 0; /* Rounded top, flat bottom */
    clip-path: path('M 7.5 0 Q 15 12, 7.5 24 Q 0 12, 7.5 0'); /* Tapered petal shape with rounded end */
    animation: falling linear infinite;
}
	@keyframes falling {
		0% {
			transform: translateY(-10vh) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translateY(100vh) rotate(360deg);
			opacity: 0.3;
		}
	}

	/* Add some variety to petal colors */
	.flower-petal:nth-child(3n) {
		background: rgba(0, 255, 255, 0.3);
	}
	
	.flower-petal:nth-child(3n + 1) {
		background: rgba(255, 0, 128, 0.3);
	}
	
	.flower-petal:nth-child(3n + 2) {
		background: rgba(128, 255, 0, 0.3);
	}
`;

if (typeof document !== "undefined") {
	const styleSheet = document.createElement("style");
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);
}
