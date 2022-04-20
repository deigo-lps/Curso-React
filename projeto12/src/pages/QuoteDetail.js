import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
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

const CommentButton = (props) => {
  return (
    <Route path={props.routePath} exact>
      <div className="centered">
        <Link className="btn--flat" to={props.path}>
          {props.children}
        </Link>
      </div>
    </Route>
  );
};

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <Card>
        <p>No Quotes.</p>
      </Card>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <CommentButton
        routePath={`/quotes/${params.quoteId}`}
        path={`/quotes/${params.quoteId}/comments`}
      >
        Load Comments
      </CommentButton>
      <CommentButton
        routePath={`/quotes/${params.quoteId}/comments`}
        path={`/quotes/${params.quoteId}`}
      >
        Hide Comments
      </CommentButton>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
