import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function Analytics({ analyticData }) {

    console.log(analyticData)
    let data = {
        labels: ['Recovered', 'Confirmed', 'Deaths'],
        datasets: [{
            label: '# of Votes',
            data: [analyticData?.recovered?.value, analyticData?.confirmed?.value, analyticData?.deaths?.value],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    }

    return (
        <div style={{ width: "30%", margin: "5rem auto" }}>
            <Doughnut data={data} />
        </div>
    )
}

export default Analytics
