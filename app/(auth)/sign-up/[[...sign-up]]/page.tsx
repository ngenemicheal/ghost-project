import { SignUp } from "@clerk/nextjs";
import { Boxes, Rocket, Share2 } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";

const features = [
  {
    icon: Boxes,
    title: "Start from a template",
    description: "Import a starter system design or begin on a blank canvas.",
  },
  {
    icon: Share2,
    title: "Invite your team",
    description: "Share a project and design together in real time.",
  },
  {
    icon: Rocket,
    title: "Ship a spec in minutes",
    description: "Turn your diagram into a technical spec with one click.",
  },
];

export default function SignUpPage() {
  return (
    <AuthShell
      headline="Create your account."
      description="Start designing systems on an infinite canvas and let AI write the spec."
      features={features}
    >
      <SignUp />
    </AuthShell>
  );
}
