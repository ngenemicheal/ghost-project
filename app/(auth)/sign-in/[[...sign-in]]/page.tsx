import { SignIn } from "@clerk/nextjs";
import { FileText, Sparkles, Users } from "lucide-react";

import { AuthShell } from "@/components/auth/auth-shell";

const features = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system and AI maps it to nodes and edges.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Live cursors, presence, and shared editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a Markdown technical spec directly from the canvas.",
  },
];

export default function SignInPage() {
  return (
    <AuthShell
      headline="Welcome back."
      description="Pick up where you left off — your canvases, specs, and teammates are waiting."
      features={features}
    >
      <SignIn />
    </AuthShell>
  );
}
