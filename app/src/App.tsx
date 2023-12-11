import { Toaster } from "./components/ui/toaster";
import Providers from "./providers";
import NavProvider from "./providers/NavProvider";

export const App = () => {
  return (
    <Providers>
      <NavProvider />
      <Toaster />
    </Providers>
  );
};
