"use client";

import { motion } from "motion/react";

export default function Home() {
	return (
		<div className="font-playfair flex min-h-screen items-start mt-55 lg:mt-0 lg:items-center justify-center p-4 sm:p-20">
			<main className="flex flex-col mr-5 lg:mt-10 mt-3 gap-6 sm:gap-8 text-center pb-1">
				<ul className="flex flex-col tracking-tighter">
					<li className="overflow-hidden font-playfair font-bold text-5xl lg:text-6xl">
						<motion.h1
							initial={{ y: 80 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
						>
							DiceCTF
						</motion.h1>
					</li>
					<li className="overflow-hidden font-playfair font-bold text-4xl">
						<motion.h1
							initial={{ y: 80 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
						>
							x
						</motion.h1>
					</li>

					<li className="overflow-hidden font-playfair font-bold text-5xl lg:text-6xl">
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
	);
}
