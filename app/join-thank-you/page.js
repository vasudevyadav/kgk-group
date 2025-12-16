'use client';
import Link from 'next/link';

export default function JoinTeamThankYou() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
          Thank you for applying!
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          We’ve received your application and our HR team will review it. 
          We will get back to you shortly with next steps.
        </p>
        <Link
          href="/"
          className="inline-block text-sm font-medium text-white border border-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
