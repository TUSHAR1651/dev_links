import { create } from "zustand";

// interface useUserStore {}

export const useUserStore = create<any>()((set) => ({
  links: [
    {
      title: "Buy my new Book",
      url: "/something.com",
      active: true,
      id: 1,
    },
    {
      title: "Buy my new new new Book",
      url: "/something.com",
      id: 2,
      active: true,
    },
  ],

  appearance: {
    id: 1,
  },

  updateActiveTheme: (id: number) =>
    set((state: any) => ({
      appearance: { id },
    })),

  addLink: (link: any) =>
    set((state: any) => ({
      links: [...state.links, link],
    })),

  removeLink: (id: number) =>
    set((state: any) => ({
      links: state.links.filter((link: any) => link.id !== id),
    })),

  activeToggle: (id: number) =>
    set((state: any) => ({
      links: state.links.map((link: any) => {
        if (link.id === id) {
          return { ...link, active: !link.active };
        } else {
          return link;
        }
      }),
    })),

  updateLink: (id: number, data: any) =>
    set((state: any) => ({
      links: state.links.map((link: any) => {
        if (link.id === id) {
          return { ...link, ...data };
        } else {
          return link;
        }
      }),
    })),
}));
