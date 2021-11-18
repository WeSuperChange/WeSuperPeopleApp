import React from "react";
import { useState } from "react";

import { Doughnut } from "react-chartjs-2";

const ResultDoughnut = (props) => {
    const [pollCollection, setPollCollection] = useState({});

    const getLabels = () => {
        const labels = [];
        pollCollection.Polls[0].PollAnswers.forEach((answer) => {
            labels.push(answer.AnswerText);
        });
        return labels;
    };

    const getData = () => {
        const data = [];
        pollCollection.Polls[0].PollAnswers.forEach((answer) => {
            data.push(answer.AnswerCount);
        });
        return data;
    };

    const buildDoughnutData = () => {
        const answerTexts = getLabels();
        const answerCounts = getData();

        const doughnutData = {
            // replace color names with answer texts
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            labels: answerTexts,

            datasets: [
                {
                    label: "# of Votes",

                    // replace data values with answer counts
                    // data: [12, 19, 3, 5, 2, 3],
                    data: answerCounts,

                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ].slice(0, answerTexts.length),

                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ].slice(0, answerCounts.length),

                    borderWidth: 1,
                },
            ],
        };
        return doughnutData;
    };

    setPollCollection(props.poll);

    return (
        <div>
            <h1>{poll[0].Question}</h1>

            <Doughnut data={buildDoughnutData()} />
        </div>
    );
};

export default ResultDoughnut;
