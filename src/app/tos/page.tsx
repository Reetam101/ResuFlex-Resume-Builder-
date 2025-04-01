// app/terms/page.tsx
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7fc] to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-[#867cb3]" />
          <span className="text-xl font-bold text-[#867cb3]">ResumeCraft</span>
        </Link>
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-3xl">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#867cb3] mb-6">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-sm max-w-none">
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using ResumeCraft ("Service"), you agree to be bound by these Terms. If you disagree, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                ResumeCraft provides an online platform for creating, editing, and downloading professional resumes. We reserve the right to modify or discontinue the Service at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                You are responsible for the accuracy of information in your resume. Do not upload sensitive personal information beyond what is normally included in a resume.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Privacy</h2>
              <p className="text-gray-600 mb-4">
                Your use of the Service is subject to our Privacy Policy. By using the Service, you consent to our collection and use of personal data as outlined therein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The Service and its original content, features, and functionality are owned by ResumeCraft and are protected by international copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                ResumeCraft shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We may revise these Terms at any time. By continuing to use the Service after revisions become effective, you agree to be bound by the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Contact Us</h2>
              <p className="text-gray-600">
                For questions about these Terms, please contact us at <span className="text-[#867cb3]">legal@resumecraft.example</span>.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-12 py-8 border-t">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ResumeCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}