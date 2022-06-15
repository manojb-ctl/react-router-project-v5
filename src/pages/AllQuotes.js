import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Manoj",
    text: "React Learning!",
  },
  {
    id: "q2",
    author: "Max",
    text: "React Learning is great!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
