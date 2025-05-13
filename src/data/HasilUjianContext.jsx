import { createContext, useState } from "react";
export const HasilUjianContext = createContext();

export function HasilUjianProvider({ children }) {
  const [hasilUjian, setHasilUjian] = useState(null); // default null

  return (
    <HasilUjianContext.Provider value={{ hasilUjian, setHasilUjian }}>
      {children}
    </HasilUjianContext.Provider>
  );
}
