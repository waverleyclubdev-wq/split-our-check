import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Split Our Check",
  description: "Terms of service and conditions of use for Split Our Check.",
};

export default function TermsOfService() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
        
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-6">By accessing and using Split Our Check, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Use of the Utility</h2>
        <p className="mb-6">Split Our Check is provided as a free, informational tool to help users calculate check splits and tip percentages. It is intended for casual, personal use.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Accuracy and Liability</h2>
        <p className="mb-6">While we strive for perfect mathematical accuracy, Split Our Check is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the calculations provided.</p>
        <p className="mb-6">Under no circumstances shall Split Our Check or its creators be held liable for any direct, indirect, incidental, or consequential damages (including, but not limited to, financial disputes, overpayments, underpayments, or awkward dinner table arguments) arising from the use or inability to use this tool.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. External Links & Advertisements</h2>
        <p className="mb-6">Our website may contain links to third-party web sites or services that are not owned or controlled by Split Our Check. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services (including those displayed via Google AdSense).</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Modifications</h2>
        <p className="mb-6">We reserve the right, at our sole discretion, to modify or replace these Terms at any time without prior notice.</p>
      </div>
    </div>
  );
}