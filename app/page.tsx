export default function Home() {
	return (
		<div className="font-playfair flex min-h-screen items-start mt-55 lg:mt-0 lg:items-center justify-center p-4 sm:p-20">
			<main className="flex flex-col mr-5 lg:mt-10 mt-3 gap-6 sm:gap-8 text-center border-b-2 border-green-300 pb-1">
				<h1 className="font-playfair text-5xl leading-10">
					DiceCTF
					<br />
					<span className="text-3xl">x</span>
					<br /> QuendCon
				</h1>
				<h2 className="text-2xl text-blue-400">- July 2025 -</h2>
				<h2 className="text-3xl border-b-2 border-green-300 pb-1 text-green-300">
					Brooklyn, NY
				</h2>
			</main>
		</div>
	);
}
