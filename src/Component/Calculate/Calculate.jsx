import React, { useState } from "react";

export default function CompoundInterest() {

    const [form, setForm] = useState({
        amount: "",
        interest: "",
        year: ""
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">

            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Compound Interest Calculator
                </h1>

                <form onSubmit={handleCalculate} className="space-y-6">

                    {/* AMOUNT */}
                    <div>
                        <label className="block text-gray-600 mb-2 font-medium">
                            Principal Amount (₹)
                        </label>
                        <input
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="Enter amount"
                            className="w-full h-14 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            required
                        />
                    </div>

                    {/* INTEREST */}
                    <div>
                        <label className="block text-gray-600 mb-2 font-medium">
                            Interest Rate (%)
                        </label>
                        <input
                            type="number"
                            name="interest"
                            value={form.interest}
                            onChange={handleChange}
                            placeholder="Enter interest rate"
                            className="w-full h-24 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            required
                        />
                    </div>

                    {/* YEAR */}
                    <div>
                        <label className="block text-gray-600 mb-2 font-medium">
                            Time (Years)
                        </label>
                        <input
                            type="number"
                            name="year"
                            value={form.year}
                            onChange={handleChange}
                            placeholder="Enter years"
                            className="w-full h-24 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                            required
                        />
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full h-14 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Calculate
                    </button>

                </form>

                {/* RESULT */}
                {result && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-2xl">

                        <h2 className="text-xl font-bold mb-4 text-gray-700">
                            Result
                        </h2>

                        <p className="text-lg">
                            Total Amount:
                            <span className="font-bold text-green-600">
                                {" "}₹{result.totalAmount}
                            </span>
                        </p>

                        <p className="text-lg mt-2">
                            Compound Interest:
                            <span className="font-bold text-blue-600">
                                {" "}₹{result.compoundInterest}
                            </span>
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}