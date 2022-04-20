import { useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <Card>
        <p>No Quotes.</p>
      </Card>
    );
  }
  console.log(match)
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <CommentButton
        routePath={match.path}
        path={`${match.url}/comments`}
      >
        Load Comments
      </CommentButton>
      <CommentButton
        routePath={`${match.path}/comments`}
        path={match.url}
      > 
        Hide Comments
      </CommentButton>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
