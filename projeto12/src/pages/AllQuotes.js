import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  {
    id: "1",
    author: "deigo",
    text: "asdasd",
  },
  {
    id: "2",
    author: "deigo futuro",
    text: "dsadsa",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
