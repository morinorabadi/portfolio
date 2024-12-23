import React from "react";

const ContactInformation = () => {
	const contactDetails = {
		email: "mori.norabadi@gmail.com",
		github: "https://github.com/morinorabadi",
		phone: "+989389493807",
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<section className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Contact Information
				</h2>
				<ul className="space-y-3">
					<li className="flex items-center">
						<span className="text-gray-600 font-medium w-20">Email:</span>
						<a
							href={`mailto:${contactDetails.email}`}
							className="text-blue-500 hover:underline"
						>
							{contactDetails.email}
						</a>
					</li>
					<li className="flex items-center">
						<span className="text-gray-600 font-medium w-20">GitHub:</span>
						<a
							href={contactDetails.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							{contactDetails.github}
						</a>
					</li>
					<li className="flex items-center">
						<span className="text-gray-600 font-medium w-20">Phone:</span>
						<a
							href={`tel:${contactDetails.phone}`}
							className="text-blue-500 hover:underline"
						>
							{contactDetails.phone}
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default ContactInformation;
