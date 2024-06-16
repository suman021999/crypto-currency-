import React, { useEffect, useState } from "react";
import { Url } from "./Url";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CoinChart = ({ currency }) => {
  const [chartData, setChartData] = useState([]);
  const { id } = useParams();
  const [days, setDays] = useState(1);
  const coinChartData = async () => {
    try {
      const { data } = await axios.get(
        `${Url}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      );

      setChartData(data.prices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    coinChartData();
  }, [currency, id, days]);

  const myData = {
    labels: chartData.map((value) => {
      const date = new Date(value[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} :${date.getMinutes()} PM`
          : `${date.getHours()} :${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),

    datasets: [
      {
        label: ` Price in Past Days ${days} in ${currency} `,
        data: chartData.map((value) => value[1]),
        borderColor: "red",
        borderWidth: "3",
      },
    ],
  };
  return (
    <>
      <div>
        {chartData.length === 0 ? (
          <Loader />
        ) : (
          <>
            <Line
              data={myData}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              style={{ marginTop: "5rem", width: "55rem" }}
            />
            <div className="my-10">
              <button
                className="h-8 bg-orange-600 border-none  w-20 rounded-xl mx-2"
                onClick={() => setDays(1)}
              >
                24 hours
              </button>
              <button
                className="h-8 bg-orange-600 border-none  w-20 rounded-xl mx-2"
                onClick={() => setDays(30)}
              >
                1 Month
              </button>
              <button
                className="h-8 bg-orange-600 border-none  w-20 rounded-xl mx-2"
                onClick={() => setDays(365)}
              >
                1 Year
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CoinChart;
