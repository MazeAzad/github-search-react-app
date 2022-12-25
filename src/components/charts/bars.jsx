import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);
import { useGlobal } from "../../context/context";
const Bars = () => {
    const { userRepos } = useGlobal();

    const projects = userRepos.map((item) => {
        const { name, forks } = item;
        return {
            label: name,
            value: forks
        }
    })
    const chartData = projects.sort((a, b) => {
        return b.value - a.value
    }).slice(0, 5);
    const chartConfigs = {
        type: "bar2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type

        dataSource: {
            // Chart Configuration
            chart: {
                caption: "most forked projects",    //Set the chart caption
                // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
                xAxisName: "projects",           //Set the x-axis name
                yAxisName: "fork",  //Set the y-axis name
                // numberSuffix: "K",
                //Set the theme for your chart
                theme: "fusion"
            },
            // Chart Data - from step 2
            data: chartData
        }
    };
    return (
        <ReactFusioncharts  {...chartConfigs} />
    )

}

export default Bars;