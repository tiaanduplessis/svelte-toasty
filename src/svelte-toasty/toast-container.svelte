<style>
	:global(.svelte-toasty) {
		list-style: none;
		position: fixed;
		right: 0.5rem;
		top: 0.5rem;
		padding: 0;
		margin: 0;
		z-index: 9999;
		position: fixed;
		max-width: 30rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	}

	:global(.svelte-toasty-toast) {
		position: relative;
		margin: 0.25rem 0;
		overflow: hidden;
		border-radius: .25rem;
		position: relative;
		width: auto;
		color: inherit;
        color: #fff;
		background-color: #2D3748;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}

	:global(.svelte-toasty-container) {
		padding: 1rem;
		display: block;
		font-weight: 500;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.svelte-toasty-content) {
		display: flex;
        font-family: inherit;
		align-items: center;
	}

	:global(.svelte-toasty-progress) {
		position: absolute;
		bottom: 0;
		background-color: rgb(0, 0, 0, 0.3);
		height: 0.4rem;
		width: 100%;
		animation-name: shrink;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}

	:global(.svelte-toasty-toast:before),
	:global(.svelte-toasty-toast:after) {
		content: "";
		position: absolute;
		z-index: -1;
		top: 50%;
		bottom: 0;
		left: 1rem;
		right: 1rem;
		border-radius: 100px / 10px;
	}

	:global(.svelte-toasty-toast:after){
		right: 10px;
		left: auto;
		transform: skew(8deg) rotate(3deg);
	}

	@keyframes shrink {
		0% {
			width: 100%;
		}
		100% {
			width: 0;
		}
	}


    :global(.svelte-toasty-toast.danger) {
        background-color: #C53030;
    }
    
    :global(.svelte-toasty-toast.success) {
        background-color: #38A169;
    }
    :global(.svelte-toasty-toast.warning) {
        background-color: #ED8936;
    }

    :global(.svelte-toasty-toast.info) {
        background-color: #3182CE;
    }
</style>

<ul class="svelte-toasty {classes.list ?? ''}" role="alert">
	{#each toasts as toast (toast.id)}
		<li transition:fade class="svelte-toasty-toast {toast.type} {classes.toast ?? ''}">
			<div class="svelte-toasty-container">
				<div class="svelte-toasty-content">
					<slot name="icon" toast="{toast}"></slot>
					<slot name="message" toast="{toast}">{toast.text}</slot>
				</div>
				<slot name="actions" toast="{toast}" remove={() => removeToast(toast.id)} />
			</div>
			<div
				aria-hidden="true"
				class="svelte-toasty-progress {classes.progress ?? ''}"
				style="animation-duration: {toast.timeout}ms;"
				on:animationend="{() => removeToast(toast.id)}"
			></div>
		</li>
	{/each}
</ul>

<script>
	import { store } from "./store.js";
	import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    export let classes = {
        list: '',
        toast: '',
        progress: ''
    }
    
	export let timeout = 3000;
    export let toasts = [];
    
	let count = 0;
	let unsubscribe;

	const createToast = ({timeout: customTimeout, ...args}) => {
		toasts = [
			{
				id: count,
				timeout: customTimeout || timeout, // TODO: Calculate timeout based on text
				...args
			},
			...toasts,
		];
		count = count + 1;
	}

	unsubscribe = store.subscribe(value => {
		if (!value) return;
		createToast(value);
	});

	onDestroy(unsubscribe);

	const removeToast = (id) => {
		toasts = toasts.filter((t) => t.id != id);
	};
</script>
