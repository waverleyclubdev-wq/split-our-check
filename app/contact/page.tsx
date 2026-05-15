"use client";

import { useActionState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmailAction } from "@/app/actions/sendEmail";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmailAction, null);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
          <Mail size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Contact Us</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have a question, found a bug, or have a feature request? Send us a message below.
        </p>

        {state?.success ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-400 rounded-xl p-6 flex flex-col items-center text-center">
            <CheckCircle2 size={40} className="text-green-500 mb-3" />
            <h3 className="font-bold text-lg mb-1">Message Sent!</h3>
            <p className="text-sm">Thanks for reaching out. We'll get back to you soon.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form action={formAction} className="space-y-5">
            {state?.error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle size={18} />
                {state.error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="hello@example.com"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white dark:focus:bg-slate-900 transition-all resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? "Sending..." : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}