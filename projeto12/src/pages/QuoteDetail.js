import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments"
const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;
