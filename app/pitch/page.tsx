import type { Metadata } from "next";
import PitchContent from "./PitchContent";

export const metadata: Metadata = {
  title:
    "ACCD — Digital Transformation Proposal | Prepared by 4 Knotts Kreativ",
  description:
    "A confidential pitch presentation by 4 Knotts Kreativ for the Air Cargo Club of Delhi leadership.",
};

export default function Page() {
  return <PitchContent />;
}
