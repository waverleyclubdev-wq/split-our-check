import { 
  HelpCircle, 
  MousePointerClick, 
  Star, 
  ShieldCheck, 
  Coffee, 
  BadgeInfo 
} from "lucide-react";

export default function SeoContent() {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 pb-20">
      
      {/* CSS Columns (Masonry Layout) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        
        {/* Card 1 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <HelpCircle className="text-green-500" size={24} />
            What is the check splitter for?
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
            <p>Every day we help people split expenses fairly in a variety of situations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Restaurant Dinners:</strong> Divide the final bill evenly among friends without the awkward mental math.</li>
              <li><strong>Roommate Expenses:</strong> Split utilities, rent, and household groceries easily.</li>
              <li><strong>Group Vacations:</strong> Figure out who owes what for shared Airbnbs, Ubers, or rental cars.</li>
              <li><strong>Office Lunches:</strong> Quickly calculate the exact per-person total when a coworker picks up the tab.</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <Star className="text-green-500" size={24} />
            Calculator Features
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-4">
            <p>We aim to provide the fastest, most frictionless check splitter on the web. All features are free, with no paywalls or sign-ups.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Instant Calculation:</strong> The numbers update in real-time as you type.</li>
              <li><strong>Built-in Tip Calculator:</strong> Instantly toggle between standard tip percentages (10%, 15%, 20%) or enter a custom amount.</li>
              <li><strong>Mobile First:</strong> Designed specifically to look and work perfectly on your phone while sitting at the dinner table.</li>
              <li><strong>Dark Mode Support:</strong> Automatically matches your device's theme so you aren't blinded in a dimly lit restaurant.</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <MousePointerClick className="text-green-500" size={24} />
            How to use the splitter
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>It's incredibly simple to use:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Check your receipt and type the total amount into the calculator.</li>
              <li>Adjust the number of people sharing the bill.</li>
              <li>Select the tip percentage you want to leave for the server.</li>
              <li>The calculator will instantly show exactly how much each person owes.</li>
            </ol>
          </div>
        </div>

        {/* Card 4 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <Coffee className="text-green-500" size={24} />
            Tipping & Etiquette
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              According to standard dining etiquette, splitting the bill evenly is the easiest and most polite way to handle a group dinner. However, if one person ordered significantly more (like premium cocktails), it is courteous for them to cover a larger share.
            </p>
            <p>
              <strong>Tip standard:</strong> In most North American restaurants, 15% to 20% is considered a standard tip for good service. If you are dining with a large party (usually 6 or more), check your receipt carefully—many restaurants automatically add an 18% gratuity to the bill, so you don't need to tip twice!
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <ShieldCheck className="text-green-500" size={24} />
            Is my financial data private?
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              Yes! We are committed to protecting your privacy. In fact, <strong>we don't collect any of your data in the first place.</strong>
            </p>
            <p>
              This calculator runs entirely inside your local web browser. We do not ask for your name, we do not connect to your bank accounts, and your calculations are never sent to our servers. Once you close the tab, the numbers are gone forever.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="break-inside-avoid mb-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-900 dark:text-white">
            <BadgeInfo className="text-green-500" size={24} />
            Why do we show ads?
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            <p>
              We rely on ads to keep this calculator 100% free for everyone. We do our best to ensure ads are unobtrusive and don't interfere with your ability to use the tool. 
            </p>
            <p>
              By allowing ads, you help support the hosting and maintenance of this utility so it remains free forever.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}