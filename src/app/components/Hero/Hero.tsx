import Image from "next/image";

export default function Hero() {
	return (
		<div
			id="hero"
			className="hero min-h-screen md:bg-gradient-to-tl from-green-900 to-bg-bgwhite"
		>
			<div className="hero-content gap-16">
				<div
					className="md:hidden h-full w-full absolute bg-gradient-to-t z-[5]
              		 from-black from-10%  to-[#0001] to-90%"
				/>

				<Image
					src="/images/real_mori.webp"
					className="md:mask md:mask-squircle h-full md:w-[60%] w-full object-cover absolute top-0 left-0  max-h-screen md:static"
					width={771}
					height={1080}
					alt="mori"
				/>

				<div className="z-10 absolute bottom-8 p-4 md:static">
					<h1 className="text-5xl font-bold text-tBlack">
						it&apos;s <span className="text-tGreen">mori</span>
					</h1>
					<h2 className="text-3xl font-bold text-tBlack">
						Full-stack 3D Developer
					</h2>
					<p className="py-6 text-tBlack text-xl max-w-md">
						I&apos;m a Web Developer with a strong focus on crafting interactive
						and engaging 3D experiences. I specialize in building full-stack
						applications and game development.
					</p>
				</div>
			</div>
		</div>
	);
}
