"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {error === "AccessDenied"
            ? "You do not have permission to sign in."
            : error || "An unknown error occurred during authentication."}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please try again or contact support if the problem persists.
        </p>
        <div className="flex justify-center">
          <Link
            href="/auth"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
