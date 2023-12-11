import Providers from "./providers";
import NavProvider from "./providers/NavProvider";

export const App = () => {
  return (
    <Providers>
      <NavProvider />
    </Providers>
  );
};
