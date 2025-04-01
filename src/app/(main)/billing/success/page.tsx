import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BillingSuccessPage() {
  return (
    <div className="bg-[#]min-h-screen bg-gradient-to-b from-[hsl(60 56% 91)] to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your account has been upgraded successfully.
        </p>

        {/* Back to Resumes Button */}
        <Link
          href="/resumes"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#867cb3] hover:bg-[#756aa3] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to My Resumes
        </Link>

        {/* Additional Help */}
        <p className="mt-6 text-sm text-gray-500">
          Receipt sent to your email. Need help?{' '}
          <a href="#" className="text-[#867cb3] hover:underline">Contact support</a>
        </p>
      </div>
    </div>
  );
}