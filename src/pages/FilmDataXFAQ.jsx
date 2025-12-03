import React, { useState, useMemo, useRef } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";
import "./FilmDataXFAQ.css";



const FAQ_DATA = [
  {
    id: "q1",
    question: "What is FilmDataX?",
    answer:
      "FilmDataX is a movie & TV metadata platform that aggregates cast, crew, ratings, trailers, and streaming availability from multiple sources for developers and cinephiles.",
  },
  {
    id: "q2",
    question: "Is FilmDataX free to use?",
    answer:
      "We offer a free tier for hobby projects and testing. For commercial or high-volume needs, please check our pricing page or contact our sales team for enterprise plans.",
  },
  {
    id: "q3",
    question: "How do I get API access?",
    answer:
      "Sign up for an account, verify your email, and navigate to the API Keys area in your dashboard to create a key. Keep it secret and do not embed your production key in client-side code.",
  },
  {
    id: "q4",
    question: "What data do you provide for each film?",
    answer:
      "Typical film objects include title, release year, runtime, genres, synopsis, cast & crew, ratings, poster/backdrop URLs, trailer links, and streaming availability per region.",
  },
  {
    id: "q5",
    question: "How often is your data updated?",
    answer:
      "Core metadata is synced daily; trending lists and ratings are refreshed hourly. Specific partners may have different update cadences.",
  },


  {
    id: "q6",
    question: "Can I use FilmDataX in commercial projects?",
    answer:
      "Yes, FilmDataX offers commercial and enterprise-friendly plans. You can use our API in production apps as long as you follow the terms of service and choose an appropriate plan.",
  },
  {
    id: "q7",
    question: "Do you support TV shows and series?",
    answer:
      "Absolutely. We provide detailed metadata for TV shows—including seasons, episodes, cast, air dates, and streaming availability.",
  },
  {
    id: "q8",
    question: "Does FilmDataX offer SDKs or example code?",
    answer:
      "Yes, we offer JavaScript, Python, and React example integrations. You can explore our GitHub repository or visit the developer docs for code samples and starter templates.",
  },
];


export default function FilmDataXFAQ({ data = FAQ_DATA }) {
  const [openId, setOpenId] = useState(null);
  const [query, setQuery] = useState("");
  const headingRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [data, query]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="fdx-faq" aria-labelledby="fdx-faq-heading">
      <div className="fdx-faq-inner">
        <div className="fdx-faq-header">
          <h2 id="fdx-faq-heading" ref={headingRef}>
            Frequently Asked Questions
          </h2>

        </div>

        <div className="fdx-accordion" role="list">
          {filtered.length === 0 ? (
            <div className="no-results">No results found for “{query}”.</div>
          ) : (
            filtered.map((item) => {
              const isOpen = openId === item.id;
              return (
                <article
                  key={item.id}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <header
                    className="faq-question"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`answer-${item.id}`}
                    onClick={() => toggle(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(item.id);
                      }
                    }}
                  >
                    <span className="q-text">{item.question}</span>
                    <span className="chev" aria-hidden>
                      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </header>

                  <div
                    id={`answer-${item.id}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`question-${item.id}`}
                    style={{
                      // simple animation: maxHeight change handled in CSS, this keeps content accessible
                      maxHeight: isOpen ? "800px" : "0px",
                    }}
                  >
                    <div className="answer-inner">{item.answer}</div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        <div className="fdx-faq-cta">
          <p>
            Can't find what you're looking for? <a href="/contact">Contact
            support</a> or check our <a href="/docs">API docs</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
