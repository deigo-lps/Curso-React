import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
