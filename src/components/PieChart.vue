<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"
import Chart from "chart.js/auto"
const chartCanvas = ref(null)
const newValue = ref('')
const newLabel = ref('')
const newColor = ref('')

let chartInstance = null

const chartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "pie",
    data: chartData,
    options: chartOptions
  })
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null
  }
})

const addNewDataToPieChart = ()=>{
    chartData.labels.push(newLabel.value)
    chartData.datasets[0].data.push(newValue.value)
    chartData.datasets[0].backgroundColor.push(newColor.value)
    chartInstance.update()
    newValue.value=''
    newLabel.value=''
    newColor.value=''
}
</script>

<template>
    <div class="pie-chart">
        <canvas ref="chartCanvas"></canvas>
        
    </div>
    <input type="number" placeholder="Enter value" v-model="newValue"><br><br>
    <input type="text" placeholder="Enter label" v-model="newLabel"><br><br>
    <input type="color" placeholder="Enter color" v-model="newColor"><br><br>
    <button @click="addNewDataToPieChart">Add</button>
</template>


<style>
</style>
