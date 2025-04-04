<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    import ChartDataLabels from "chartjs-plugin-datalabels";
    // Chart.register(ChartDataLabels);

    export let type = "doughnut";
    export let chartCanvasId = "PieChart-" + Math.random();
    export let labels = ["No data"];
    export let chartOptions = {};
    export let chartData = {
        labels: labels,
        datasets: [
            {
                label: "No Data Found",
                data: [1],
            },
        ],
    };
    export let chartPlugins = [ChartDataLabels];

    let ctx;
    onMount(() => {
        try {
            let ctx = document.getElementById(chartCanvasId)?.getContext("2d");
            new Chart(ctx, {
                type,
                data: chartData,
                options: chartOptions,
                plugins: chartPlugins,
            });
        } catch (error) {
            console.log(error);
        }
    });
</script>

<div class="w-full">
    <canvas id={chartCanvasId} width="400" height="100">
        <p>Failed to render chart</p>
    </canvas>
</div>
