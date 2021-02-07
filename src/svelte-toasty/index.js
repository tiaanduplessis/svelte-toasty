import { store } from "./store.js";

export {default as ToastContainer} from './toast-container.svelte'

export function toast({type = "default", timeout, ...args}) {
	store.set({ type, timeout, ...args});
	return new Promise((resolve) => setTimeout(resolve, timeout));
}

export function danger(text, timeout) {
	return toast({text, type: "danger", timeout});
}

export function warning(text, timeout) {
	return toast({text, type: "warning", timeout});
}

export function info(text, timeout) {
	return toast({text, type: "info", timeout});
}

export function success(text, timeout) {
	return toast({text, type: "success", timeout});
}