"use client";

import { useState } from "react";
import { Minus, Plus, RefreshCw, Copy, CheckCircle2 } from "lucide-react";

export default function Calculator() {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState<number>(2);
  const [tip, setTip] = useState<number>(0); // <-- Default is now 0
  const [copied, setCopied] = useState(false);

  const billNum = parseFloat(bill) || 0;
  const tipAmount = billNum * (tip / 100);
  const total = billNum + tipAmount;
  const perPerson = total / people;

  const handleCopy = () => {
    if (billNum === 0) return;
    navigator.clipboard.writeText(perPerson.toFixed(2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setBill("");
    setPeople(2);
    setTip(0); // <-- Reset button now goes back to 0
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto w-full text-left">
      
      {/* LEFT SIDE: Inputs */}
      <div className="flex-1 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-sm transition-colors duration-200">
        
        {/* Bill Total */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">How much is the total check?</label>
          <input
            type="text" 
            inputMode="decimal" 
            pattern="[0-9]*" 
            value={bill}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9.]/g, '');
              if (val.split('.').length <= 2) {
                setBill(val);
              }
            }}
            placeholder="0.00"
            className="w-full px-4 py-4 text-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        {/* People */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Number of people</label>
          <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-950">
            <button onClick={() => setPeople(Math.max(1, people - 1))} className="p-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
              <Minus size={20} />
            </button>
            <div className="flex-1 text-center font-semibold text-lg text-slate-900 dark:text-white">{people} People</div>
            <button onClick={() => setPeople(people + 1)} className="p-4 bg-green-500 hover:bg-green-600 text-white transition-colors">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Tip */}
        <div className="mb-2">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tip percentage</label>
          <div className="grid grid-cols-4 gap-2">
            {[0, 10, 15, 20].map((t) => (
              <button
                key={t}
                onClick={() => setTip(t)}
                className={`py-3 rounded-xl font-semibold border transition-all ${tip === t ? "bg-green-500 border-green-500 text-white shadow-sm" : "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-500 dark:hover:border-green-500"}`}
              >
                {t}%
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Sticky Results */}
      <div className="lg:w-[400px] flex flex-col gap-4">
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white p-8 rounded-2xl shadow-lg sticky top-24 border border-slate-300 dark:border-slate-800 transition-colors duration-200">
          <div className="text-center mb-8">
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-2">
              Each person pays
            </p>
            <h2 className="text-5xl font-bold text-green-600 dark:text-green-400 mb-6 break-words">
              {perPerson.toFixed(2)}
            </h2>
            
            <div className="flex justify-between items-center border-t border-slate-300 dark:border-slate-800 pt-6 text-sm">
              <span className="text-slate-500 dark:text-slate-400">Tip: <strong className="text-slate-900 dark:text-white ml-1">{tipAmount.toFixed(2)}</strong></span>
              <span className="text-slate-500 dark:text-slate-400">Total: <strong className="text-slate-900 dark:text-white ml-1">{total.toFixed(2)}</strong></span>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleReset} 
              className="p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl transition-colors"
              aria-label="Reset Calculator"
              title="Reset Calculator"
            >
              <RefreshCw size={20} />
            </button>
            
            <button 
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
                copied 
                  ? "bg-green-600 hover:bg-green-500 text-white" 
                  : "bg-green-500 hover:bg-green-400 text-slate-900"
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={20} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copy Amount
                </>
              )}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { Minus, Plus, Copy, RefreshCw } from "lucide-react";

// export default function Calculator() {
//   const [bill, setBill] = useState<string>("");
//   const [people, setPeople] = useState<number>(2);
//   const [tip, setTip] = useState<number>(15);
//   const [mode, setMode] = useState<"equal" | "custom">("equal");
//   const [copied, setCopied] = useState(false);

//   const billNum = parseFloat(bill) || 0;
//   const tipAmount = billNum * (tip / 100);
//   const total = billNum + tipAmount;
//   const perPerson = total / people;

//   const handleCopy = () => {
//     if (billNum === 0) return;
//     const text = `🧾 Split Our Check\nTotal: ${total.toFixed(2)} (inc. ${tip}% tip)\nSplit by: ${people}\n👉 Each person owes: ${perPerson.toFixed(2)}`;
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleReset = () => {
//     setBill("");
//     setPeople(2);
//     setTip(15);
//     setMode("equal");
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto w-full">
      
//       {/* LEFT SIDE: Inputs */}
//       <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        
//         {/* Tabs */}
//         <div className="flex bg-slate-50 p-1 rounded-lg mb-8 border border-slate-200">
//           <button
//             onClick={() => setMode("equal")}
//             className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === "equal" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"}`}
//           >
//             Equal Split
//           </button>
//           <button
//             onClick={() => setMode("custom")}
//             className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${mode === "custom" ? "bg-white text-slate-900 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"}`}
//           >
//             Custom Split
//           </button>
//         </div>

//         {/* Bill Total */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">How much was the total check?</label>
//           <input
//             type="number"
//             value={bill}
//             onChange={(e) => setBill(e.target.value)}
//             placeholder="0.00"
//             className="w-full px-4 py-4 text-xl border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//           />
//         </div>

//         {/* People */}
//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Number of people</label>
//           <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
//             <button onClick={() => setPeople(Math.max(1, people - 1))} className="p-4 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors">
//               <Minus size={20} />
//             </button>
//             <div className="flex-1 text-center font-semibold text-lg">{people} People</div>
//             <button onClick={() => setPeople(people + 1)} className="p-4 bg-green-500 hover:bg-green-600 text-white transition-colors">
//               <Plus size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Tip */}
//         <div className="mb-2">
//           <label className="block text-sm font-semibold text-slate-700 mb-2">Tip percentage</label>
//           <div className="grid grid-cols-4 gap-2">
//             {[0, 10, 15, 20].map((t) => (
//               <button
//                 key={t}
//                 onClick={() => setTip(t)}
//                 className={`py-3 rounded-xl font-semibold border transition-all ${tip === t ? "bg-green-500 border-green-500 text-white" : "bg-white border-slate-200 text-slate-700 hover:border-green-500"}`}
//               >
//                 {t}%
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE: Sticky Results */}
//       <div className="lg:w-[400px] flex flex-col gap-4">
//         <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg sticky top-6">
//           <div className="text-center mb-8">
//             <p className="text-slate-400 font-medium mb-2">
//               {mode === "equal" ? "Each person pays" : "Custom split coming soon"}
//             </p>
//             <h2 className="text-5xl font-bold text-green-400 mb-6">
//               {mode === "equal" ? perPerson.toFixed(2) : "---"}
//             </h2>
            
//             <div className="flex justify-between items-center border-t border-slate-700 pt-6 text-sm">
//               <span className="text-slate-400">Tip: <strong className="text-white ml-1">{tipAmount.toFixed(2)}</strong></span>
//               <span className="text-slate-400">Total: <strong className="text-white ml-1">{total.toFixed(2)}</strong></span>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <button onClick={handleReset} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors" aria-label="Reset">
//               <RefreshCw size={20} className="text-slate-300" />
//             </button>
//             <button 
//               onClick={handleCopy}
//               className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${copied ? "bg-green-600 text-white" : "bg-green-500 hover:bg-green-400 text-slate-900"}`}
//             >
//               <Copy size={20} />
//               {copied ? "Copied!" : "Copy Results"}
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }