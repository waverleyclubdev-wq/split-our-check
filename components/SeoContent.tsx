import { ReceiptText, Users, Zap } from "lucide-react";

export default function SeoContent() {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4 text-slate-800 pb-20">
      
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center mb-24">
        <div className="p-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ReceiptText size={32} />
          </div>
          <h3 className="font-bold mb-2">1. Enter check total</h3>
          <p className="text-slate-600 text-sm">Type in the total amount from your restaurant receipt.</p>
        </div>
        <div className="p-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users size={32} />
          </div>
          <h3 className="font-bold mb-2">2. Add people</h3>
          <p className="text-slate-600 text-sm">Choose how many friends are splitting the check.</p>
        </div>
        <div className="p-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap size={32} />
          </div>
          <h3 className="font-bold mb-2">3. Split instantly</h3>
          <p className="text-slate-600 text-sm">Get each person's exact share with tip included instantly.</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold mb-4">The Easiest Way to Split Checks</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
          <strong>Split The Check</strong> is a free, instant check splitting calculator designed for restaurants, dinners, trips, parties, and group expenses. No sign-up required — just enter your check total and split it with friends in seconds.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-8">Split Restaurant Checks Fairly</h3>
        <p className="mb-6 text-slate-600 leading-relaxed">
          After a great dinner with friends, figuring out who owes always takes longer than it should. Our restaurant check splitter makes it simple — enter the total, add the tip, and divide evenly. It's the fastest dinner check calculator you'll ever use.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-8">Tip Calculator Built In</h3>
        <p className="mb-6 text-slate-600 leading-relaxed">
          Not sure how much to tip? Choose from standard tip percentages (10%, 15%, 20%). Our tip calculator shows the tip amount and per-person share instantly, so you never have to do mental math at the table again.
        </p>
      </div>
    </div>
  );
}