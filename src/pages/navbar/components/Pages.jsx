import { useEffect } from "react";

export default function Page({ title, children }) {
  useEffect(() => {
    document.title = title || "Video Belajar";
  }, [title]);

  return children;
}
