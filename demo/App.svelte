<script>
    import { Button, PieChart } from "../src/components";

    const chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "No Data Found",
                data: [10, 20, 30, 40, 50, 60],
            },
        ],
    };
</script>

<main class="p-8 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Component Library Demo</h1>

    <section class="my-8 p-4 border border-gray-200 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">Button Component</h2>
        <div class="flex gap-4 my-4">
            <Button
                text="Primary Button"
                onClick={() => alert("Primary clicked!")}
            />

            <Button
                text="Secondary Button"
                onClick={() => alert("Secondary clicked!")}
            />
        </div>
    </section>
    <section>
        <PieChart {chartData} />
    </section>
</main>
