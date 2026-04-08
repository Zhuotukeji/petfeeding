'use client';

/**
 * AFS (AdSense for Search) Ad Slot
 *
 * Before AFS approval  → renders an invisible placeholder (no layout impact).
 * After AFS approval   → replace the inner div with the Google pageads snippet:
 *
 *   <div id="afscontainer1"></div>   ← top / side slot
 *   <div id="afscontainer2"></div>   ← mid slot
 *   <div id="afscontainer3"></div>   ← bottom slot
 *
 * Then load the AFS script in app/layout.tsx and call window._googCsa() per
 * Google's AFS integration guide.
 */

interface AfsResultsProps {
  query: string;
  slot: 'top' | 'side' | 'mid' | 'bottom';
}

export default function AfsResults({ query, slot }: AfsResultsProps) {
  const afsEnabled = !!process.env.NEXT_PUBLIC_AFS_CLIENT_ID;

  if (!afsEnabled) {
    // Invisible placeholder – keeps the DOM structure ready for AFS injection
    return (
      <div
        data-afs-slot={slot}
        data-afs-query={query}
        className="hidden"
        aria-hidden="true"
      />
    );
  }

  // AFS ad container IDs follow Google's pageads integration pattern.
  // Replace the content below with your actual AFS script / callback per your
  // Google AFS integration instructions.
  const containerId =
    slot === 'top' || slot === 'side'
      ? 'afscontainer1'
      : slot === 'mid'
      ? 'afscontainer2'
      : 'afscontainer3';

  return (
    <div
      id={containerId}
      data-afs-slot={slot}
      className="w-full min-h-[90px]"
      aria-label="Sponsored results"
    />
  );
}
