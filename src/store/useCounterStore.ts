import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IInitialState {
  value: number;
  newValue: number[];
}

interface ICounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface ICounter extends IInitialState, ICounterActions {}

const initialState: IInitialState = {
  value: 50,
  newValue: [1, 2, 3],
};

const counterStore: StateCreator<
  ICounter,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set) => ({
  ...initialState,
  increment: () =>
    set((state) => ({ value: state.value + 1 }), false, "incrementCount"),
  decrement: () =>
    set(
      (state) => ({ value: state.value === 0 ? 0 : state.value - 1 }),
      false,
      "decrementCount"
    ),
  reset: () => set(() => ({ value: 0 }), false, "resetCount"),
});

const useCounterStore = create<ICounter>()(
  devtools(
    persist(counterStore, {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ value: state.value }),
    })
  )
);

export const useCount = () => useCounterStore((state) => state.value);
export const incrementCounter = () => useCounterStore.getState().increment;
export const decrementCounter = () => useCounterStore.getState().decrement;
export const resetCounter = () => useCounterStore.getState().reset;
