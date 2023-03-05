import react, { useState } from "react";
import "./Home.css";
import Table from "./table";
import Pagination from "./pagination";
import Header from "./Header";
import Spinner from "react-bootstrap/Spinner";
function Home({ fetchData, books, title, setTitle, offset, setOffset }) {
  const [query, setQuery] = useState("title");
  return (
    <div
      className="frontend"
      style={{ borderLeft: "2px solid white", minHeight: "100vh" }}
    >
      <Header
        fetchData={fetchData}
        setTitle={setTitle}
        title={title}
        query={query}
        setQuery={setQuery}
      />

      {books ? (
        books.length > 0 || offset > 0 ? (
          <div className="table">
            <Table books={books} />
          </div>
        ) : (
          <h1 className="mt-5">No Relevant Data Found</h1>
        )
      ) : (
        <div>
          <Spinner
            animation="grow"
            variant="light"
            className="mt-5"
            size="lg"
          />
        </div>
      )}

      {books && books.length > 0 && (
        <Pagination
          fetchData={fetchData}
          title={title}
          query={query}
          offset={offset}
          setOffset={setOffset}
          books={books}
        />
      )}
    </div>
  );
}
export default Home;
