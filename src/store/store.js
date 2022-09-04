import { createStore } from "vuex";
import { itemService } from "../services/item.service";
const store = createStore({
  strict: true,
  state: {
    items: {},
  },
  getters: {
    items({ items }) {
      return items;
    },
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items;
    },
  },
  actions: {
    async loadItems({ commit }) {
      try {
        const items = await itemService.query()
        console.log(items);
        commit({ type: "setItems", items })
        return items
      } catch (err) {
        console.error("cannot get items:", err)
      }
    },
    async saveItem({ commit }, { item }) {
      commit({ type: "setCurrItem", currItem: item })
      console.log("created by", item.loggedUser)
      const newItem = await itemService.save(item)
      return newItem
    },
  },
  modules: {},
});

export default store;
