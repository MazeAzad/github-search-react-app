import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useGlobal } from "../../context/context";
const Column = () => {
    ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    const { userRepos } = useGlobal();
    const projects = userRepos.map((item) => {
        const { name, stargazers_count } = item;
        return {
            label: name,
            value: stargazers_count
        }
    })
    const chartData = projects.sort((a, b) => {
        return b.value - a.value
    }).slice(0, 5);


    const chartConfigs = {
        type: "column2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type

        dataSource: {
            // Chart Configuration
            chart: {
                caption: "most pupolar projects ",    //Set the chart caption
                // subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
                xAxisName: "projects",           //Set the x-axis name
                yAxisName: "stars",  //Set the y-axis name
                // numberSuffix: "K",
                //Set the theme for your chart
                theme: "candy"
            },
            // Chart Data - from step 2
            data: chartData
        }
    };

    return (
        <ReactFC {...chartConfigs} />
    )
}

export default Column;