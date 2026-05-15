import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Split Our Check",
  description: "Privacy policy and data handling practices for Split Our Check.",
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-300 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-6">At Split Our Check, your privacy is our priority. We have built this tool to be as lightweight and frictionless as possible, which means we collect the absolute minimum amount of data required to keep the site running and free.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Financial Data</h2>
        <p className="mb-6">We <strong>do not</strong> collect, store, or transmit any of the numbers, check totals, or tip percentages you enter into the calculator. All calculations are performed locally in your web browser. Once you close or refresh the page, that data is gone forever.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Third-Party Advertisements (Google AdSense)</h2>
        <p className="mb-6">To keep this utility 100% free, we use Google AdSense to display advertisements. Google and its third-party vendors use cookies to serve ads based on your prior visits to our website or other websites.</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet.</li>
          <li>You may opt out of personalized advertising by visiting Google's <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">Ads Settings</a>.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Analytics</h2>
        <p className="mb-6">We may use basic, anonymized web analytics to understand how many people visit our site and which features are used most. This data cannot be used to identify you personally.</p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Changes to This Policy</h2>
        <p className="mb-6">We may update our Privacy Policy from time to time. We advise you to review this page periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      </div>
    </div>
  );
}