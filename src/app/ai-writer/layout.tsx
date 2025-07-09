// src/app/ai-writer/layout.tsx

import type { ReactNode } from "react";

export default function AiWriterLayout({ children }: { children: ReactNode }) {
  return <>{children}</>; // ✅ Reuses the root layout (src/app/layout.tsx)
}
