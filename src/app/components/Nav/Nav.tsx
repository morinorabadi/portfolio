"use client";
import { slide as Menu } from "react-burger-menu";

export default function Nav() {
	const links = [
		{ id: "1", href: "projects", text: "projects" },
		{ id: "2", href: "skills", text: "skills" },
		{ id: "3", href: "workExperience", text: "experience" },
		{ id: "4", href: "contactInformation", text: "contact" },
	];

	return (
		<>
			<div className="fixed top-0 h-20 left-0 w-screen z-20 bg-gradient-to-b from-[#000000dd] to-[#00000000]">
				<div className=" text-tGreen p-6 text-3xl">
					<a href="#about">mori</a>
				</div>
			</div>
			<Menu right>
				{links.map((link) => (
					<a
						href={`#${link.href}`}
						key={link.id}
						className="text-tGreen hover:text-tGreen p-1 text-lx underline"
					>
						{link.text}
					</a>
				))}
			</Menu>
		</>
	);
}
