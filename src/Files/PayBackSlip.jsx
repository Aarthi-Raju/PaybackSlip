import React, { useState, useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import './PayBackSlip.css'

function PayBackSlip() {
    const [formData, setFormData] = useState({
        name: '',
        chitRef: '',
        memberRef: '',
        chitAmount: '',
        divident: '',
        payableAmount: '',
        month: ''
    });
    const [isprinted, setIsprinted] = useState(false)
    function youprint() {
        window.print()
        setIsprinted(true)
    }

    useEffect(() => {
        const showhide = () => {
            setIsprinted(false)
        }
        window.addEventListener("afterprint", showhide)
        return () => {
            window.removeEventListener("afterprint", showhide)
        }
    }, [])
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='slip'>
            {/*             <div className='head'>₹ PAYBACK CHIT</div> */}
            <style>
                {
                    `@media print{
                    .hide-on-print{
                        display:none;
                    }
                }`
                }
            </style>
            <form onSubmit={handleFormSubmit}>
                <div className='content'>
                    <div className='content-one'>
                        <div className='left-details'>
                            <div>
                                <label>Name:</label>
                                <input type='text' value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label>Chit Ref:</label>
                                <input type='text' value={formData.chitRef} onChange={e => setFormData({ ...formData, chitRef: e.target.value })} />
                            </div>
                            <div>
                                <label>Member Ref:</label>
                                <input type='text' value={formData.memberRef} onChange={e => setFormData({ ...formData, memberRef: e.target.value })} />
                            </div>
                        </div>
                        <div className='right-details'>
                            <div>
                                <label>Chit Amount:</label>
                                <input type='number' value={formData.chitAmount} onChange={e => setFormData({ ...formData, chitAmount: e.target.value })} />
                            </div>
                            <div>
                                <label>Divident:</label>
                                <input type='text' value={formData.divident} onChange={e => setFormData({ ...formData, divident: e.target.value })} />
                            </div>
                            <div>
                                <label>Payable amount:</label>
                                <input type='number' value={formData.payableAmount} onChange={e => setFormData({ ...formData, payableAmount: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    <div className='details'>
                        <div>
                            <label>Month:</label>
                            <input type='text' value={formData.month} onChange={e => setFormData({ ...formData, month: e.target.value })} />
                        </div>
                    </div>
                </div>
                {!isprinted && (<button type='submit' className='hide-on-print' onClick={youprint}>PRINT</button>)}
            </form>
        </div>
    )
}

export default PayBackSlip
