import { create } from "zustand";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import { FavoritesSlicetype, createFavoritesSlice } from "./favoritesSlice";
import {
  NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<
  RecipesSliceType & FavoritesSlicetype & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
