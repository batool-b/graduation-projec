import { useState } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { CreditCard, Lock, ChevronRight } from "lucide-react";
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
    if (!card.holder.trim()) errs.holder = "Cardholder name required";
    if (card.number.replace(/\s/g, "").length < 16) errs.number = "Valid 16-digit card number required";
    if (!card.expiry.match(/^\d{2}\/\d{2}$/)) errs.expiry = "Format: MM/YY";
    if (card.cvv.length < 3) errs.cvv = "3-4 digit CVV required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setProcessing(true);
    
    // محاكاة عملية الربط بالباك-اند لاحقاً
    setTimeout(() => {
      setProcessing(false);
      const bookingId = `BK-${Date.now()}`;
      navigate(`/booking-success?bookingId=${bookingId}&tripId=${trip.id}&travelers=${travelers}&total=${totalPrice}`);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-linear-to-r from-green-700 to-green-600 py-12 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-green-200 mb-4">
            <Link to="/trips" className="hover:text-white">Trips</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/booking/${id}`} className="hover:text-white">Booking</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Payment</span>
          </div>
          <h1 className="text-3xl font-bold">Secure Payment</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-4">Payment Method</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((pm) => (
                  <button
                    key={pm.id}
                    onClick={() => setMethod(pm.id)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      method === pm.id ? "border-green-500 bg-green-50" : "border-gray-200"
                    }`}
                  >
                    <div className="text-2xl mb-1">{pm.icon}</div>
                    <p className="text-xs font-medium text-gray-700">{pm.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                {method === "paypal" ? "PayPal Login" : "Card Details"}
              </h2>

              {method === "paypal" ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Redirecting to PayPal...</p>
                  <button onClick={handleSubmit} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">
                    {processing ? "Processing..." : "Continue with PayPal"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Card fields... */}
                  <input
                    value={card.holder}
                    onChange={(e) => setCard({ ...card, holder: e.target.value.toUpperCase() })}
                    placeholder="JOHN SMITH"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                  <input
                    value={card.number}
                    onChange={(e) => setCard({ ...card, number: formatCardNumber(e.target.value) })}
                    placeholder="1234 5678 9012 3456"
                    className="w-full border rounded-xl px-4 py-3"
                  />
                  <button type="submit" disabled={processing} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold">
                    {processing ? "Processing..." : `Confirm Payment - $${totalPrice}`}
                  </button>
                </form>
              )}
            </div>
          </div>
          {/* Order Summary ... */}
        </div>
      </div>
    </div>
  );
}