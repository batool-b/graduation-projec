import { AIRecommendations } from '../components/AIRecommendations';

export const AIRecommendationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-green-100 text-sm font-semibold mb-2">AI Travel Matching</p>
          <h1 className="text-4xl font-bold mb-3">Personalized Trip Recommendations</h1>
          <p className="text-green-50 max-w-2xl">
            A complete recommendation experience that combines your preferences, previous activity,
            trip quality, and real booking data to suggest the best FarAway trips.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AIRecommendations />
      </main>
    </div>
  );
};

export default AIRecommendationsPage;
