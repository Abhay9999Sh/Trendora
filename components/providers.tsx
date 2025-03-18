// "use client"

// import type React from "react"

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { useState } from "react"

// export default function Providers({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             staleTime: 60 * 1000, // 1 minute
//             refetchOnWindowFocus: false,
//           },
//         },
//       }),
//   )

//   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// }

"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
