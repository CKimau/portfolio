import React from "react";

// Personal Portfolio - Enhanced React component with multi-page style and ready for export
// Tailwind CSS assumed available

export default function ChrisKimauPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/profile.jpg" alt="Chris Kimau" className="w-16 h-16 rounded-full shadow" />
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">Chris Kimau</h1>
              <p className="mt-1 text-sm md:text-base text-slate-600">Supply Chain Specialist • Data Scientist</p>
            </div>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="max-w-5xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Driving smarter supply chains with data & forecasting</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I am a Supply Chain professional with 6+ years of experience in inventory management, SAP (MM, PP, SD),
              and data-driven forecasting. I develop forecasting tools, interactive dashboards, and machine learning solutions
              to optimize planning, reduce stockouts, and cut excess inventory.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/Ckimau" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg border border-slate-200 hover:shadow">
                View GitHub
              </a>
              <a href="https://linkedin.com/in/chriskimau" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-white hover:opacity-95">
                LinkedIn
              </a>
              <a href="#contact" className="inline-block px-4 py-2 rounded-lg border border-slate-200 hover:shadow">
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>📍 Nairobi, Kenya</li>
              <li>🏷️ Current role: Inventory & Warehouse Executive</li>
              <li>🎓 Bachelor's in Finance • Data Science Bootcamp Graduate</li>
              <li>💼 6+ years in supply chain & analytics</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl font-bold">Featured Projects</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold text-lg">SForecast — Supply Chain Forecasting App</h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Multi-tab Streamlit application for SKU forecasting, demand planning and stock simulation. Integrated Prophet,
              ARIMA and Holt-Winters models, with configuration saving, multi-SKU comparisons, and forecasting database.
            </p>
            <img src="/screenshots/sforecast.png" alt="SForecast App Screenshot" className="mt-4 rounded-lg shadow" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-slate-500">Technologies: Streamlit, Prophet, Python, SQL</div>
              <a href="https://github.com/Ckimau/SForecast" target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">GitHub</a>
            </div>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold text-lg">Electricity Consumption Forecasting</h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Forecasted hourly electricity consumption (8,784 records) using ARIMA and Prophet. Generated actionable insights
              for energy demand planning and optimization.
            </p>
            <img src="/screenshots/electricity.png" alt="Electricity Forecast Screenshot" className="mt-4 rounded-lg shadow" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-slate-500">Technologies: ARIMA, Prophet, pandas, scikit-learn</div>
              <a href="#" className="text-sm font-medium text-slate-600">Details</a>
            </div>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold text-lg">Recommender System Prototype</h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Logistic regression–based recommender with a complete pipeline: cleaning, feature engineering, train/test split and
              interpretability for business use cases.
            </p>
            <img src="/screenshots/recommender.png" alt="Recommender Screenshot" className="mt-4 rounded-lg shadow" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-slate-500">Technologies: scikit-learn, Python</div>
              <a href="#" className="text-sm font-medium text-slate-600">Details</a>
            </div>
          </article>

          <article className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold text-lg">Clustering & Market Segmentation</h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              KMeans and hierarchical clustering for customer segmentation; PCA and semi-supervised learning enhanced interpretability.
            </p>
            <img src="/screenshots/clustering.png" alt="Clustering Screenshot" className="mt-4 rounded-lg shadow" />
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-slate-500">Technologies: scikit-learn, PCA</div>
              <a href="#" className="text-sm font-medium text-slate-600">Details</a>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-xl font-bold">Experience</h3>
        <div className="mt-6 space-y-4">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">Inventory & Warehouse Executive — Skanem Africa</h4>
            <div className="text-xs text-slate-500">2023 — Present</div>
            <ul className="mt-3 list-disc ml-5 text-sm text-slate-700 space-y-1">
              <li>Managed stock planning, reconciliation, and weekly value tracking for account managers.</li>
              <li>Designed and developed the SForecast Streamlit app for forecasting and demand planning.</li>
              <li>Implemented safety stock configuration and forecast database integration.</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">Supply Chain Analyst — Mabati Rolling Mills</h4>
            <div className="text-xs text-slate-500">2019 — 2023</div>
            <ul className="mt-3 list-disc ml-5 text-sm text-slate-700 space-y-1">
              <li>Developed Power BI dashboards and automated reporting workflows.</li>
              <li>Enhanced demand planning processes using predictive models and data-driven approaches.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-6">
        <h3 className="text-xl font-bold">Skills & Tools</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            'Python', 'Prophet', 'ARIMA', 'Streamlit', 'SQL', 'Power BI', 'SAP (MM/PP/SD)', 'Forecasting', 'Pandas', 'scikit-learn'
          ].map((s) => (
            <span key={s} className="inline-block px-3 py-1 rounded-full bg-white shadow text-xs">{s}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-white to-slate-50 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="mt-2 text-sm text-slate-700">Interested in collaborating or hiring? Reach out:</p>
          <div className="mt-4 space-y-2 text-sm">
            <div>📧 Email: <a href="mailto:kimauchris0@gmail.com" className="underline">kimauchris0@gmail.com</a></div>
            <div>💼 LinkedIn: <a href="https://linkedin.com/in/chriskimau" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/chriskimau</a></div>
            <div>📂 GitHub: <a href="https://github.com/Ckimau" target="_blank" rel="noreferrer" className="underline">github.com/Ckimau</a></div>
          </div>

          <p className="mt-6 text-xs text-slate-500">This portfolio can be exported as a one-page PDF for recruiters or hosted as a live site.</p>
        </div>
      </section>

      <footer className="max-w-5xl mx-auto px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Chris Kimau — Supply Chain Specialist & Data Scientist
      </footer>
    </main>
  );
}
