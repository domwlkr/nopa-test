import React from 'react';
import shapes from '../../../static/images/Shapes.svg';

const HomeSecondary = (props) => {
  return (
    <div className="secondary-content home-secondary">
      <div>
        <div>
          <h2>There's no such things as "one size fits all" finance.</h2>
          <p>We were founded to make money simple and fair for everyone: whether you're looking for a loan, or to get better rewards for your investments.</p>
        </div>
        <div>
          <img className="shapes" alt="Shapes" src={shapes} />
        </div>
      </div>
    </div>
  );
};

export default HomeSecondary;