
import {Spinner, Button } from 'react-bootstrap';
const Trendspinner = ({showLoading, browserSupportsAnimations}) =>{
    return (
        <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </> 
    );
  }

  export default Trendspinner;
