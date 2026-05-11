import React, { useState } from "react";

export default function CompoundInterest() {

    const [form, setForm] = useState({
        amount: "",
        interest: "",
        year: ""
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();

        const P = Number(form.amount);
        const R = Number(form.interest);
        const T = Number(form.year);

        const A = P * Math.pow((1 + R / 100), T);
        const CI = A - P;

        setResult({
            totalAmount: A.toFixed(2),
            compoundInterest: CI.toFixed(2)
        });

        setForm({
            amount: "",
            interest: "",
            year: ""
        });
    };

    return (
        <div className="container">

            <div className="card">

                <h1 className="title">
                    Compound Interest Calculator
                </h1>

                <form onSubmit={handleCalculate} className="form">

                    {/* AMOUNT */}
                    <div className="field">
                        <label>Principal Amount (₹)</label>
                        <input
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="Enter amount"
                            required
                        />
                    </div>

                    {/* INTEREST */}
                    <div className="field">
                        <label>Interest Rate (%)</label>
                        <input
                            type="number"
                            name="interest"
                            value={form.interest}
                            onChange={handleChange}
                            placeholder="Enter interest rate"
                            required
                        />
                    </div>

                    {/* YEAR */}
                    <div className="field">
                        <label>Time (Years)</label>
                        <input
                            type="number"
                            name="year"
                            value={form.year}
                            onChange={handleChange}
                            placeholder="Enter years"
                            required
                        />
                    </div>

                    {/* BUTTON */}
                    <button type="submit">
                        Calculate
                    </button>

                </form>

                {/* RESULT */}
                {result && (
                    <div className="result">

                        <h2>Result</h2>

                        <p className="w-[100px] h-12 p-12">
                            Total Amount: <b>₹{result.totalAmount}</b>
                        </p>

                        <p>
                            Compound Interest: <b>₹{result.compoundInterest}</b>
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}