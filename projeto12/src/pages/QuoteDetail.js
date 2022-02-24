import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import Card from "../components/UI/Card";
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


const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);

  if(!quote){
    return(
      <Card>
        <p>No Quotes.</p>
      </Card>
    )
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
