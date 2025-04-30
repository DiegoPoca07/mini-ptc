import React from 'react';
import './termsPages.css';

const TermsPage = () => {
  return (
    <div className="terms-page-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      
      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to NaturaDeluxe. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our services.</p>
        </section>

        <section className="terms-section">
          <h2>2. Use of the Website</h2>
          <p>The content of this website is for your general information and use only. It is subject to change without notice. We reserve the right to modify, update, or discontinue any aspect of our website at any time.</p>
          
          <h3>2.1 Account Registration</h3>
          <p>To access certain features of the website, you may be required to register for an account. You agree to provide accurate and complete information and to update such information to keep it accurate and current.</p>
          
          <h3>2.2 Prohibited Activities</h3>
          <p>You are prohibited from using the website for any illegal or unauthorized purpose. You must not attempt to gain unauthorized access to our systems or engage in any activity that disrupts or interferes with our services.</p>
        </section>

        <section className="terms-section">
          <h2>3. Products and Transactions</h2>
          <p>All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Prices for products are subject to change without notice.</p>
          
          <h3>3.1 Order Processing</h3>
          <p>Upon placing an order, you will receive an acknowledgment email confirming receipt of your order. This does not mean that your order has been accepted. We will confirm acceptance by sending you an email that confirms that the products have been dispatched.</p>
          
          <h3>3.2 Payment</h3>
          <p>We accept various payment methods as indicated on our website. By providing a payment method, you confirm that you are authorized to use the payment method you provided and that the payment information you provided is true and accurate.</p>
        </section>

        <section className="terms-section">
          <h2>4. Shipping and Delivery</h2>
          <p>We strive to deliver products within the estimated delivery time specified on our website. However, delays may occur due to unforeseen circumstances. We are not responsible for delays that are outside of our control.</p>
        </section>

        <section className="terms-section">
          <h2>5. Returns and Refunds</h2>
          <p>Our return policy allows you to return products within 30 days of delivery. Products must be in their original condition and packaging. For detailed information about our return and refund process, please refer to our Returns and Refunds Policy.</p>
        </section>

        <section className="terms-section">
          <h2>6. Intellectual Property</h2>
          <p>All content published on this website, including but not limited to text, graphics, logos, images, and software, is the property of NaturaDeluxe or its content suppliers and is protected by international copyright laws.</p>
        </section>

        <section className="terms-section">
          <h2>7. Privacy Policy</h2>
          <p>Your use of our website is also governed by our Privacy Policy, which is incorporated into these terms and conditions by reference. Please review our Privacy Policy to understand our practices regarding your personal information.</p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, NaturaDeluxe shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or products.</p>
        </section>

        <section className="terms-section">
          <h2>9. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [Your Country/State].</p>
        </section>

        <section className="terms-section">
          <h2>10. Contact Information</h2>
          <p>If you have any questions about these terms and conditions, please contact us at support@naturadeluxe.com or through our customer support page.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;