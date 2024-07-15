import { create } from "zustand"
import {persist} from "zustand/middleware"

const appStore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set({ dopen }),
});

const useAppStore = create(
  persist(appStore, { name: "my_app_store" })
);

export default useAppStore;
