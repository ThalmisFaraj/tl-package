<script>
    export let text = "Click me";
    export let onClick = () => {};
</script>

<button
    on:click={onClick}
    class="px-4 py-2 rounded-md border border-gray-300 cursor-pointer bg-blue-800 text-white hover:bg-blue-600 transition-colors duration-200"
>
    {text}
</button>

<style>
</style>
