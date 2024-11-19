import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './DomainsPage.css'; // Import your CSS file

const DomainsPage = () => {
  const [domains, setDomains] = useState([]);
  console.log("domain pageeeeeeeeeeeeeeee");

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sure/domains'); // Endpoint to fetch domains
        setDomains(response.data);
      } catch (error) {
        console.error('Error fetching domains:', error);
      }
    };

    fetchDomains();
  }, []);

  return (
    <div className="domains-page">
      <header className="header">
        <h1>Project Domains</h1>
      </header>
      <div className="domains-list">
        {domains.map((domain) => (
          <div className="domain-item" key={domain.id}>
            <Link to={`/projects/${domain.name}`} className="domain-link">
              <h2>{domain.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainsPage;
