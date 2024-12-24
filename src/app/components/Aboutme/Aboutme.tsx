import Image from "next/image";

const Aboutme = () => {
	return (
		<div className="hero bg-[#white] min-h-screen">
			<div className="hero-content flex-col lg:flex-row">
				<Image
					src="/images/real_mori.webp"
					className="max-w-3xl rounded-lg shadow-2xl"
					width={771}
					height={1080}
					alt="mori"
				/>
				<div>
					<h1 className="text-5xl font-bold text-tBlack">
						it&apos;s <span className="text-tGreen">mori</span>
					</h1>
					<p className="py-6 text-tBlack text-xl max-w-md">
						I&apos;m a Web Developer with a strong focus on crafting interactive
						and engaging 3D experiences. I specialize in building full-stack
						applications and game development.
					</p>
					{/* <button   className="btn btn-primary">Get Started</button> */}
				</div>
			</div>
		</div>
	);
};

export default Aboutme;
