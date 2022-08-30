import { useState } from "react";
import getInformation from "../../api/service";
import { CalculateResult } from "../../utils/calculateResult";
import RewardPerMonth from "../RewardPerMonth/RewardPerMonth";
import RewardTotal from "../RewardTotal/RewardTotal";

function Dashboard(){
    const [data, setData] = useState({
        status: null,
        message: '',
        data: []
    });
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState(0)

    const getData = async() => {
        setData({
            status: null,
            message: '',
            data: []
        })
        setLoading(true)
        try {
            const response = await getInformation(number);
            if(response.status === 200){
                const results = CalculateResult(response.data); 
                setData({
                    status: response.status,
                    message: response.message,
                    data: results 
                })
            }
            setLoading(false)
        } catch (error) {
            setData(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    const renderInformation = (status) => {
        switch(status){
            case 200: 
                return (
                    <div className="d-flex">
                        <div className="view-2">
                            <div className="box">
                                <div className="box-header">
                                    <h6>Reward Point Result</h6>
                                </div>
                                <div className="box-body">
                                    <RewardPerMonth data={data.data}/>
                                    <RewardTotal data={data.data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 400:
                return (
                    <div className="d-flex">
                        <div className="view-1">
                            <div className="error-message">
                                {data.message}
                            </div>
                        </div>
                    </div>  
                )
            default: 
                return null;
        }
    }

    return (
        <>
            <div className="d-flex mb-5">
                <div className="view-1">
                    <input 
                        className="input-1" 
                        value={number} 
                        data-testid="input-element"
                        onChange={e=>setNumber(e.target.value)}
                        type="number"
                    />
                    <small className="text-help">Please enter 3 - error handler purpose</small>

                    <div className="mt-2 d-grid">
                        <button 
                            className="btn-1" 
                            onClick={getData} 
                            data-testid="btn-send-request"
                        >
                            Send
                        </button>
                    </div>
                </div>                
            </div>

            {loading && <div className="align-center" data-testid="div-spinner"><div className="spin"></div></div>}
            {renderInformation(data.status)}
        </>
    )
    
}

export default Dashboard