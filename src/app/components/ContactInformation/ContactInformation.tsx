import React from "react";

const ContactInformation = () => {
	const contactDetails = [
		{
			title: "Email",
			link: "mailto:mori.norabadi@gmail.com",
			text: "mori.norabadi@gmail.com",
		},
		{
			title: "GitHub",
			link: "https://github.com/morinorabadi",
			text: "https://github.com/morinorabadi",
		},
		{ title: "Phone", link: "tel:+98938 949 3807", text: "+98938 949 3807" },
	];

	return (
		<div className="flex items-center justify-center bg-background">
			<section className="p-6 rounded-lg max-w-md mx-auto">
				<h2 className="text-2xl font-semibold text-green-700 mb-4">
					Contact Information
				</h2>
				<ul className="space-y-3">
					{contactDetails.map((detail) => (
						<li key={detail.title} className="flex items-center">
							<span className="text-gray-400 font-medium w-20">
								{detail.title}
							</span>
							<a
								href={detail.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-500 hover:underline"
							>
								{detail.text}
							</a>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default ContactInformation;
