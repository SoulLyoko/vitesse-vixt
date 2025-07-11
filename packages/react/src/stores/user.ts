import { create } from 'zustand'

interface State {
  savedName: string
  previousNames: string[]
  otherNames: () => string[]
}

interface Action {
  setNewName: (name: string) => void
}

export const useUserStore = create<State & Action>(
  (set, get) => ({
    savedName: '',
    previousNames: [],
    otherNames: () => get().previousNames.filter(e => e !== get().savedName),
    setNewName: (name) => {
      set((state) => {
        const { savedName, previousNames } = state
        if (savedName && !previousNames?.includes(savedName))
          previousNames.push(savedName)

        return { savedName: name, previousNames }
      })
    },
  }),
)
