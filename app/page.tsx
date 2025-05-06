"use client";

import { motion } from "motion/react";
import { Rosario } from "next/font/google";

const rosario = Rosario({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

const FlowerPetal = ({ style }: { style?: React.CSSProperties }) => (
	<div className="flower-petal" style={style} />
);

const FloatingDot = ({ style }: { style?: React.CSSProperties }) => (
	<div className="floating-dot" style={style} />
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

	const renderDots = () => {
		return [...Array(15)].map((_, i) => (
			<FloatingDot
				key={i}
				style={{
					left: `${Math.random() * 100}%`,
					animationDelay: `${Math.random() * 20}s`,
					animationDuration: `${15 + Math.random() * 15}s`,
				}}
			/>
		));
	};

	return (
		<>
			<div className="petals-container min-h-screen">
				{renderPetals()}
				{renderDots()}
			</div>

			<head>
				<link rel="preload" href="/bg6.png" as="image" />
				<link rel="preload" href="/bg8.png" as="image" />
			</head>

			<motion.div
				className="fixed inset-0 opacity-5 lg:opacity-10 lg:block bg-texture"
				style={{
					backgroundSize: "370%",
					backgroundPosition: "bottom",
					zIndex: -2,
				}}
				data-bg-url="/bg8.png"
			/>
			<motion.div
				initial={{ opacity: 0, scale: "90%" }}
				animate={{ opacity: 1, scale: "100%" }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="fixed inset-0 main-bg"
				style={{
					zIndex: 1,
				}}
				data-bg-url="/bg6.png"
			/>

			<div
				className={`font-${rosario} flex min-h-screen items-start mt-[27vh] lg:mt-0 lg:items-center justify-center p-4 sm:p-20`}
				style={{ position: "relative", zIndex: 1 }}
			>
				<main className="flex flex-col mr-5 lg:mt-10 mt-3 gap-1 lg:gap-8 text-center pb-1">
					<ul className="flex flex-col tracking-tighter">
						<li className="overflow-hidden text-5xl font-playfair font-bold text-34xl lg:text-6xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								DiceCTF
							</motion.h1>
						</li>
						<li className="overflow-hidden font-playfair font-bold text-2xl lg:text-4xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								x
							</motion.h1>
						</li>

						<li className="overflow-hidden h-18 text-5xl font-playfair font-bold text-34xl lg:text-6xl">
							<motion.h1
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
							>
								QuendCon
							</motion.h1>
						</li>
					</ul>

					<ul className="flex flex-col tracking-tighter gap-2">
						<li className="overflow-hidden">
							<motion.h2
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className="text-2xl text-blue-400"
							>
								July 10 + 11 2025
							</motion.h2>
						</li>
						<li className="overflow-hidden">
							<motion.h2
								initial={{ y: 80 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className="text-xl text-green-300"
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
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120vh;
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
			opacity: 0.8;
		}
	}

	/* Add some variety to petal colors */
	.flower-petal:nth-child(3n) {
		background: rgba(0, 255, 255, 0.3);
	}
	
	.flower-petal:nth-child(3n + 1) {
		background: rgba(129, 3, 154, 0.8);
	}
	
	.flower-petal:nth-child(3n + 2) {
		background: rgba(128, 255, 0, 0.3);
	}
		.flower-petal:nth-child(3n + 3) {
		background: rgba(0, 97, 145, .8);
	}

	.floating-dot {
		position: absolute;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		animation: floatingDot linear infinite;
	}

	@keyframes floatingDot {
		0% {
			transform: translateY(-10vh) translateX(0) rotate(0deg);
			opacity: 0.8;
		}
		50% {
			transform: translateY(30vh) translateX(100px) rotate(180deg);
			opacity: 1;
		}
		100% {
			transform: translateY(100vh) translateX(0) rotate(360deg);
			opacity: 0.8;
		}
	}

	/* Add variety to dot colors */
	.floating-dot:nth-child(4n) {
		background: rgba(109, 205, 0, 0.6); /* Golden yellow */
	}
	
	.floating-dot:nth-child(4n + 1) {
		background: rgba(0, 191, 255, 0.6); /* Deep sky blue */
	}
	
	.floating-dot:nth-child(4n + 2) {
		background: rgba(255, 105, 180, 0.6); /* Hot pink */
	}
	
	.floating-dot:nth-child(4n + 3) {
		background: rgba(50, 205, 50, 0.6); /* Lime green */
	}

	/* Background image optimization classes */
	.bg-texture {
		background-size: 150%;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('/bg8.png');
		will-change: transform; /* Hint to browser to optimize */
	}
	
	.main-bg {
		background-size: cover;
		background-position: center;
		background-image: url('/bg6.png');
		will-change: transform;
	}
	
	/* Progressive loading for background images */
	@media (prefers-reduced-data: reduce) {
		.bg-texture, .main-bg {
			background-image: none;
		}
	}
	
	/* Add responsive image handling */
	@media (max-width: 768px) {
		.main-bg {
			background-image: url('/bg6-small.png'); /* Consider creating a smaller version */
		}
	}
`;

if (typeof document !== "undefined") {
	const styleSheet = document.createElement("style");
	styleSheet.innerText = styles;
	document.head.appendChild(styleSheet);

	// Progressive image loading
	window.addEventListener("load", () => {
		// Set full quality images after page load
		document.querySelectorAll("[data-bg-url]").forEach((el) => {
			const url = el.getAttribute("data-bg-url");
			if (url) {
				(el as HTMLElement).style.backgroundImage = `url(${url})`;
			}
		});
	});
}
