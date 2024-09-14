// File: Checkout.js
import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

const CheckoutDetails = () => {
    return(
     <Container className="mt-5">
      <h1 className="text-center font-heading">FASCO Demo Checkout</h1>

      {/* Main Row: Contact, Delivery, Payment */}
      <Row className="mt-4 text-start" >
        {/* Left Section - Contact, Delivery, Payment */}
        <Col md={6}>
          {/* Contact Section */}
          <h3 className='text-start font-heading'>Contact</h3>
          <Form.Group controlId="formEmail" className="mb-4">
            {/* <Form.Label >Email Address</Form.Label> */}
            <Form.Control type="email" placeholder="Email Address" />
            <small className="form-text text-muted">
              Have an account? <a href="#">Create Account</a>
            </small>
          </Form.Group>

          {/* Delivery Section */}
          <h3 className='font-heading'>Delivery</h3>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formCountry" className="mb-4">
                {/* <Form.Label>Country / Region</Form.Label> */}
                <Form.Control as="select">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName" className="mb-4">
                {/* <Form.Label>First Name</Form.Label> */}
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName" className="mb-3">
                {/* <Form.Label>Last Name</Form.Label> */}
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formAddress" className="mb-3">
            {/* <Form.Label>Address</Form.Label> */}
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formCity" className="mb-3">
                {/* <Form.Label>City</Form.Label> */}
                <Form.Control type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPostalCode" className="mb-3">
                {/* <Form.Label>Postal Code</Form.Label> */}
                <Form.Control type="text" placeholder="Postal Code" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Check type="checkbox" className='fs-7' label="Save This Info For Future" />

          {/* Payment Section */}
          <h3 className="mt-4 font-heading">Payment</h3>
          <Form.Group controlId="formCardType" className="mb-3">
            {/* <Form.Label>Credit Card</Form.Label> */}
            <InputGroup>
              <Form.Control as="select">
                <option>Visa</option>
                <option>MasterCard</option>
                <option>American Express</option>
              </Form.Control>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formCardNumber" className="mb-3">
            {/* <Form.Label>Card Number</Form.Label> */}
            <Form.Control type="text" placeholder="Card Number" />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formExpiration" className="mb-3">
                {/* <Form.Label>Expiration Date</Form.Label> */}
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formSecurityCode" className="mb-3">
                {/* <Form.Label>Security Code</Form.Label> */}
                <Form.Control type="text" placeholder="CVV" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formCardHolderName" className="mb-3">
            {/* <Form.Label>Card Holder Name</Form.Label> */}
            <Form.Control type="text" placeholder="Card Holder Name" />
          </Form.Group>
          <Form.Check type="checkbox" label="Save This Info For Future" className='fs-7' />
          <Button className="mt-3 w-100" variant="dark" type="submit">
            Pay Now
          </Button>
        </Col>

        {/* Right Section - Order Summary */}
        <Col md={6}>
          <h4>Order Summary</h4>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <strong>Mini Dress With Ruffled Straps</strong>
              <p>Red</p>
            </div>
            <div>$100.00</div>
          </div>
          <Form.Group controlId="formDiscountCode" className="mb-3">
            <Form.Label>Discount code</Form.Label>
            <InputGroup>
              <Form.Control type="text" placeholder="Enter discount code" />
              <Button variant="dark">Apply</Button>
            </InputGroup>
          </Form.Group>
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>$100.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p>$40.00</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <h5>$140.00</h5>
          </div>
        </Col>
      </Row>

      {/* Newsletter Section */}
  
    </Container>
  );
};

export default CheckoutDetails;
