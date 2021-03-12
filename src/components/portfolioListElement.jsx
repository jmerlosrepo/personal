import React from 'react';

const PortfolioListElement = ({porfolioElement}) => {
    const {name, description, githubLink} = porfolioElement;
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td><a target="_blank" href={githubLink}>{githubLink}</a></td>
        </tr>
    )
}

export default PortfolioListElement;
