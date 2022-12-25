import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);
import { useGlobal } from "../../context/context";
const Doughnot = () => {
    const { userRepos } = useGlobal();
    const projects = userRepos.map((item) => {
        const { language, stargazers_count } = item;
        return {
            label: language,
            value: stargazers_count
        }
    })
    const chartData = projects.sort((a, b) => {
        return b.value - a.value
    }).slice(0, 5);
    const chartConfigs = {
        type: "doughnut2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type

        dataSource: {
            // Chart Configuration
            chart: {
                caption: "language per star ",    //Set the chart caption
                // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
                xAxisName: "projects",           //Set the x-axis name
                yAxisName: "stars",  //Set the y-axis name
                // numberSuffix: "K",
                //Set the theme for your chart
                theme: "fusion"
            },
            // Chart Data - from step 2
            data: chartData
        }
    };
    return (
        <ReactFusioncharts {...chartConfigs} />
    )

}
export default Doughnot;