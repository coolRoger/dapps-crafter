import { create } from "zustand";

import { devtools } from "zustand/middleware";

interface TDAppDetailStore {
    components: any[];
    setComponents: (components: any[]) => void;
}

const useDAppDetailStore = create<TDAppDetailStore>()(
    devtools(
        (set, get) => ({
            components: [],
            setComponents(components) {
                set({
                    components
                });
            }
        }),
        { name: "DApp-Store" }
    )
);

export default useDAppDetailStore;
