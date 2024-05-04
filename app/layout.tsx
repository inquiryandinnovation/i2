import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: { template: "%s | i2", default: "The Inquiry and Innovation Program" },
	description:
		"The Inquiry & Innovation Program is a four-year leadership and enrichment program that challenges students to inquire how their capabilities and passions can serve communities from the local to global scale and to explore innovative ways to do so effectively.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="text-gray-700">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
