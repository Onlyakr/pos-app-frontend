import { create } from "zustand";

type ManagerStore = {
  isManager: boolean;
  setIsManager: (isManager: boolean) => void;
};

const useManager = create<ManagerStore>()((set) => ({
  isManager: false,
  setIsManager: (isManager: boolean) => set({ isManager }),
}));

export default useManager;
