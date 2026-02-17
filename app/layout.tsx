import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homeflow",
  description: "Homeflow app with Clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
            <div className="text-sm font-medium text-zinc-800">
              Homeflow
            </div>
            <div className="flex items-center gap-3">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm font-medium hover:bg-zinc-100"
                  >
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    type="button"
                    className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-900"
                  >
                    Sign up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
