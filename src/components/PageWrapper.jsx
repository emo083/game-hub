import { useEffect } from "react";

export default function PageWrapper({ title, children }) {
  useEffect(() => {
    document.title = `${title} | Gamehub`;
  }, [title]);

  return <>{children}</>;
}
