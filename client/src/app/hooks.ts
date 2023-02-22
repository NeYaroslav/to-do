import { AppState, AppDispatch } from "./store";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";


export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()