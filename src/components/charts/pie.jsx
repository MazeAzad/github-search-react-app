import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie2d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useGlobal } from "../../context/context";
const Pie = () => {
    ReactFC.fcRoot(FusionCharts, Pie2d, FusionTheme);
    const { userRepos } = useGlobal();
    const languages = userRepos.reduce((total, item) => {
        const { language } = item;
        if (!language) return total;
        if (total[language]) {
            total[language] = {
                ...total[language],
                value: total[language].value + 1
            }
        }
        else {
            total[language] = {
                label: language,
                value: 1
            }
        }
        return total;
    }, {})
    const languagesArray = Object.values(languages).sort((a, b) => {
        return b.value - a.value;
    }).slice(0, 5);



    const chartConfigs = {
        type: "pie2d", // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: "most pupolar languages ",    //Set the chart caption
                // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
                xAxisName: "Country",           //Set the x-axis name
                yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
                // numberSuffix: "K",
                theme: "fusion"                 //Set the theme for your chart
            },
            // Chart Data - from step 2
            data: languagesArray
        }
    };

    return (
        <ReactFC {...chartConfigs} />
    )
}

export default Pie;