import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyesh Patel — Frontend Developer Portfolio",
  description:
    "Futuristic 3D portfolio of Divyesh Patel — Frontend Developer specializing in React, Next.js, and modern web experiences. 2.5+ years building dashboards and CRM systems.",
  keywords: ["Divyesh Patel", "Frontend Developer", "React", "Next.js", "Portfolio", "TypeScript"],
  authors: [{ name: "Divyesh Patel" }],
  openGraph: {
    title: "Divyesh Patel — Frontend Developer",
    description: "Futuristic 3D portfolio showcasing projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020008] text-white antialiased scanline" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}



// "mailto:divyeshkalariya26@gmail.com"
// "https://www.linkedin.com/in/divyesh-kalariya-579a16257"
// "https://github.com/Divyeshkalariya?tab=repositories"
// "https://www.facebook.com/deep.kalariya.752?mibextid=ZbWKwL"
// "https://instagram.com/_divyesh_patel_26_?igshid=ZDdkNTZiNTM="