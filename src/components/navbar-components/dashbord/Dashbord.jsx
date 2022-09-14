import React ,{useState}from 'react';

import "./dashbord.scss"
import { Line } from 'react-chartjs-2';


const Dashbord = () => {

    const [datas, setDatas] = useState(["0", "0", "0", "0", "0", "0"])
    const [label, setLabel] = useState(["فروردین", "اردیبهشت", "خرداد", "تیر", "امرداد", "شهریور"])



    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    const data = {
        labels: [...label],
        datasets: [
            {
                label: "میزان فروش",
                data: [...datas],
                fill: false,
                backgroundColor: 'rgb(252, 113, 113)',
                borderColor: 'rgb(252, 113, 113)',
            },
            {
                label: "میزان بازدید",
                data: [...datas.map(e=>{return e*10})],
                fill: false,
                backgroundColor: 'black',
                borderColor: 'black',
            },
        ],
    };


    return (
        <div className="admin-panel-container dashbord">
            <div className="panel-title">
                داشبورد
            </div>
            <div className="container">
                <div className="carts">
                    <div className="e-cart">
                        <div className="top">
                            <div className="label">آمار بازدید</div>
                            <div className="icon"><img src="/images/1.png" alt="" /></div>
                        </div>
                        <div className="bot">
                            <div className="e-info">
                                <div>بازدید امروز:</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>بازدید کل</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>کاربر ثبت شده</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                    <div className="e-cart">
                        <div className="top">
                            <div className="label">آمارفروش</div>
                            <div className="icon"><img src="/images/2.png" alt="" /></div>
                        </div>
                        <div className="bot">
                            <div className="e-info">
                                <div>فروش امروز</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>فروش این ماه</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>فروش کل</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                    <div className="e-cart">
                        <div className="top">
                            <div className="label">آمار کالا ها</div>
                            <div className="icon"><img src="/images/3.png" alt="" /></div>
                        </div>
                        <div className="bot">
                            <div className="e-info">
                                <div>کل کالا های ثبت شده</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>کالا های موجود</div>
                                <div>0</div>
                            </div>
                            <div className="e-info">
                                <div>کالا های ناموجود</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <div className="title">
                        <div>نمودار میزان فروش و بازدید ۶ ماه گذشته</div>
                        <div className="left">
                            <i className="fas  fa-chart-line"></i>
                        </div>
                    </div>
                    <div className="chart-container">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashbord;