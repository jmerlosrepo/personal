import React from "react";
import PortfolioListElement from './portfolioListElement';

const Portfolio = ({portfolios}) => {
  return (
    <div className="container container-margins">
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map(portfolio => <PortfolioListElement key={portfolio.id} porfolioElement={portfolio} />)}
        </tbody>
      </table>      
    </div>
  );
};

export default Portfolio;
