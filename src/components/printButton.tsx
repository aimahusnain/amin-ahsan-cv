"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-4 border-ink bg-paper px-6 py-3 text-lg font-black shadow-[6px_6px_0_0_var(--color-signal)] hover:bg-ink hover:text-paper active:translate-x-[6px] active:translate-y-[6px] active:shadow-none print:hidden"
    >
      Save as PDF
    </button>
  );
}