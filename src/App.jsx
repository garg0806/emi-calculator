








import { useState } from "react";

export default function App() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState(null);
  const [interest, setInterest] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateEMI = () => {
    const p = Number(loan);
    const r = Number(rate) / 12 / 100;
    const n = Number(tenure);

    if (!p || !r || !n) return;

    const emiValue =
      (p * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPayment = emiValue * n;
    const totalInterest = totalPayment - p;

    setEmi(emiValue.toFixed(2));
    setInterest(totalInterest.toFixed(2));
    setTotal(totalPayment.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          EMI Calculator
        </h1>

        <input
          type="number"
          placeholder="Loan Amount"
          className="w-full border p-3 rounded mb-3"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
        />

        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="w-full border p-3 rounded mb-3"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Tenure (Months)"
          className="w-full border p-3 rounded mb-4"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />

        <button
          onClick={calculateEMI}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Calculate EMI
        </button>

        {emi && (
          <div className="mt-6">
            <h2 className="font-semibold text-lg">
              Monthly EMI: ₹{emi}
            </h2>
            <p>Total Interest: ₹{interest}</p>
            <p>Total Payment: ₹{total}</p>
          </div>
        )}

        <div className="mt-8 border-t pt-4 text-center">
          <p className="font-semibold">Shubham Garg</p>
          <p>Shubhamgarg178011@gmail.com</p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline block mt-2"
          >
            Built for Digital Heroes
          </a>
        </div>
      </div>
    </div>
  );
}