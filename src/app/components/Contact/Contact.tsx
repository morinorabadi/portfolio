import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Phone } from "lucide-react";

export default function Contact() {
	const contactDetails = [
		{
			title: "Email",
			link: "mailto:mori.norabadi@gmail.com",
			text: "mori.norabadi@gmail.com",
			icon: Mail,
		},
		{
			title: "GitHub",
			link: "https://github.com/morinorabadi",
			text: "github.com/morinorabadi",
			icon: Github,
		},
		{ 
			title: "Phone", 
			link: "tel:+989389493807", 
			text: "+98 938 949 3807",
			icon: Phone,
		},
	];

	return (
		<section id="contact" className="bg-slate-950 py-20">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl">
					<div className="mb-12 text-center">
						<h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
							Get in <span className="text-tGreen">Touch</span>
						</h2>
						<p className="mt-4 text-lg text-slate-400">
							Let&apos;s discuss your next project or just say hello
						</p>
					</div>

					<Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
						<CardHeader className="space-y-1 pb-6">
							<CardTitle className="text-2xl text-white">Contact Information</CardTitle>
							<CardDescription className="text-slate-400">
								Feel free to reach out through any of these channels
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{contactDetails.map((detail) => {
								const Icon = detail.icon;
								return (
									<div
										key={detail.title}
										className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-950/50 p-4 transition-all hover:border-tGreen/50 hover:bg-slate-900/50"
									>
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-tGreen/10 text-tGreen transition-colors group-hover:bg-tGreen/20">
											<Icon className="h-6 w-6" />
										</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-slate-400">
												{detail.title}
											</p>
											<a
												href={detail.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-base font-medium text-slate-200 transition-colors hover:text-tGreen"
											>
												{detail.text}
											</a>
										</div>
										<Button
											asChild
											variant="ghost"
											size="sm"
											className="text-slate-400 hover:text-tGreen"
										>
											<a
												href={detail.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												Visit
											</a>
										</Button>
									</div>
								);
							})}
						</CardContent>
					</Card>

					<div className="mt-8 text-center">
						<p className="text-sm text-slate-500">
							© {new Date().getFullYear()} mori. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
