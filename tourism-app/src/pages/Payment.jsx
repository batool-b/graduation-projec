import { useState } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { CreditCard, ChevronRight } from "lucide-react";
import { trips } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

const paymentMethods = [
  { id: "credit", label: "Credit Card", icon: "💳" },
  { id: "visa", label: "Visa", icon: "🔵" },
  { id: "mastercard", label: "MasterCard", icon: "🔴" },
  { id: "paypal", label: "PayPal", icon: "🅿️" },
];

function formatCardNumber(value) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

export function Payment() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === Number(id));
  const travelers = Number(searchParams.get("travelers") || 1);
  const totalPrice = Number(searchParams.get("total") || (trip?.price || 0));

  const [method, setMethod] = useState("credit");
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  if (!trip || !isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/trips" className="bg-green-600 text-white px-6 py-2.5 rounded-xl">Browse Trips</Link>
      </div>
    );
  }

  const validate = () => {
    if (method === "paypal") return {};
    const errs = {};
    if (!card.holder.trim()) errs.holder = "Required";
    if (card.number.replace(/\s/g, "").length < 16) errs.number = "Invalid number";
    if (!card.expiry.match(/^\d{2}\/\d{2}$/)) errs.expiry = "MM/YY";
    if (card.cvv.length < 3) errs.cvv = "Invalid CVV";
    return errs;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      alert("Please fill in all card details correctly.");
      return;
    }
    
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      const bookingId = `BK-${Date.now()}`;
      navigate(`/booking-success?bookingId=${bookingId}&tripId=${trip.id}&travelers=${travelers}&total=${totalPrice}`);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-12 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Secure Payment</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Methods */}
            <div className="bg-white rounded-2xl border p-6">
              <h2 className="font-bold mb-4">Payment Method</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((pm) => (
                  <button
                    type="button"
                    key={pm.id}
                    onClick={() => setMethod(pm.id)}
                    className={`p-3 rounded-xl border-2 ${method === pm.id ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                  >
                    <div className="text-2xl">{pm.icon}</div>
                    <p className="text-xs font-medium">{pm.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Details or PayPal */}
            <div className="bg-white rounded-2xl border p-6">
              <h2 className="font-bold mb-5 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                {method === "paypal" ? "PayPal Payment" : "Card Details"}
              </h2>

              {method === "paypal" ? (
                <div className="text-center py-6">
                  <p className="mb-4">Redirecting to PayPal secure gateway...</p>
                  <button type="submit" disabled={processing} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">
                    {processing ? "Redirecting..." : "Continue with PayPal"}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    value={card.holder}
                    onChange={(e) => setCard({ ...card, holder: e.target.value })}
                    placeholder="Cardholder Name"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                  <input
                    value={card.number}
                    onChange={(e) => setCard({ ...card, number: formatCardNumber(e.target.value) })}
                    placeholder="0000 0000 0000 0000"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      value={card.expiry}
                      onChange={(e) => setCard({ ...card, expiry: e.target.value })}
                      placeholder="MM/YY"
                      className="border rounded-xl px-4 py-3"
                    />
                    <input
                      value={card.cvv}
                      onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                      placeholder="CVV"
                      className="border rounded-xl px-4 py-3"
                    />
                  </div>
                  <button type="submit" disabled={processing} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold mt-4">
                    {processing ? "Processing..." : `Confirm Payment - $${totalPrice}`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}