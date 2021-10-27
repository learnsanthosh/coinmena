
import {Row , Col} from 'react-bootstrap';

function Header() {
  return (
<>
    <Row className="border-light text-light mb-2 pb-2">
        <Col xs={12} className="text-center"><h1>Trending</h1></Col>
         <Col xs={12} className="text-center"><p>This are the developers building hot tools</p></Col>
         
    </Row>
    <hr className="border-bottom-light"></hr>
    </>
  );
}

export default Header;
