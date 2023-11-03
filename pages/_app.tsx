import RootLayout from "@/app/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      ) : (
        "error"
      )}
    </>
  );
}
