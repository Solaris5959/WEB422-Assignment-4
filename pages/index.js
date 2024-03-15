/*********************************************************************************
*  WEB422 – Assignment 3
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Connor McDonald Student ID: 136123221 Date: Feb 23, 2024
*
********************************************************************************/ 


import useSWR from "swr";
import { useState, useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Replace `(Your Cyclic App)` with your actual API endpoint
  const { data, error } = useSWR(`https://good-cyan-moose-veil.cyclic.app/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Pagination handlers
  const previous = () => setPage(prev => prev > 1 ? prev - 1 : 1);
  const next = () => setPage(prev => prev + 1);

  // Error handling or loading state can be added here

  return (
    <div>
      <p> HI </p>
    </div>
  );
}