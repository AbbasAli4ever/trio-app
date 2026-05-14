import { create } from 'zustand';

export type TrayItem = {
  id: string;
  name: string;
  price: string;
  image: any;
  quantity: number;
  category: string;
  meta?: Record<string, any>;
};

interface TrayState {
  items: TrayItem[];
  isOpen: boolean;
  addItem: (item: Omit<TrayItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  changeQty: (id: string, delta: number) => void;
  setQuantity: (id: string, quantity: number, itemData?: Omit<TrayItem, 'quantity'>) => void;
  openTray: () => void;
  closeTray: () => void;
  submitOrder: () => void;
}

export const useTrayStore = create<TrayState>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        isOpen: true,
      };
    });
  },

  removeItem: (id) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  changeQty: (id, delta) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0),
    }));
  },

  setQuantity: (id, quantity, itemData) => {
    if (quantity <= 0) {
      set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      return;
    }
    set((state) => {
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        // Update quantity AND all fields so name/price stay fresh
        const updated = itemData
          ? { ...existing, ...itemData, id, quantity }
          : { ...existing, quantity };
        return { items: state.items.map((i) => i.id === id ? updated : i), isOpen: true };
      }
      if (itemData) {
        return { items: [...state.items, { ...itemData, id, quantity }], isOpen: true };
      }
      return state;
    });
  },

  openTray: () => set({ isOpen: true }),
  closeTray: () => set({ isOpen: false }),

  submitOrder: () => {
    const { items } = get();
    const subtotalNum = items.reduce((sum, item) => {
      const num = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
      return isNaN(num) ? sum : sum + num * item.quantity;
    }, 0);

    const order = {
      orderId: `ORD-${Date.now()}`,
      placedAt: new Date().toISOString(),
      totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: subtotalNum > 0 ? `Rs ${subtotalNum.toLocaleString()}` : 'TBC',
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    console.log('[ORDER SUBMITTED]', JSON.stringify(order, null, 2));
    set({ items: [], isOpen: false });
  },
}));
