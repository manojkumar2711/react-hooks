import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

function AdvanceApiCall() {
  const [url, setUrl] = useState("");
  const repo1 = useQuery({ queryKey: ["gitdata", url], queryFn: apiCall });
  const repo2 = useQuery({
    queryKey: ["github2", "https://dummyjson.com/users"],
    queryFn: apiCall,
  });

  function apiCall({ queryKey }) {
    if (queryKey[1]) {
      return fetch(queryKey[1]).then((res) => res.json());
    }
    throw new Error("url is missing");
  }
  if (repo2.isLoading) {
    return <h4>Loading...</h4>;
  }

  console.log(repo1.error);
  if (repo2.error) {
    return <h4>An error occurred: {repo1.error.message}</h4>;
  }

  console.log(repo1.data);
  console.log(repo2.data); // products data

  return (
    <div>
      {repo1.data && (
        <>
          <h1>Products</h1>
          {repo1.data.products.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
            </li>
          ))}{" "}
        </>
      )}
      <button onClick={() => setUrl("https://dummyjson.com/products")}>
        change url
      </button>
      <h1>Products</h1>
      {repo2.data.users.map((item, index) => (
        <li key={index}>
          {item.firstName} - {item.email}
        </li>
      ))}
    </div>
  );
}

export default AdvanceApiCall;
