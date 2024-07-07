import { StreamProvider } from "@/providers/StreamClientProvider";
import { ReactElement } from "react";

const layount = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <StreamProvider>{children}</StreamProvider>
    </main>
  );
};

export default layount;
