import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
