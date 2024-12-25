


import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from 'emailjs-com';
import styles from "./CheckOut.module.css";

function CheckOut() {
  const location = useLocation();
  const checkoutData = location.state; 

  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendOrder = () => {
    // التحقق من حقول البيانات الشخصية
    if (!customerDetails.firstName || !customerDetails.phoneNumber || !customerDetails.email) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    // إعداد بيانات البريد الإلكتروني
    const emailParams = {
      productName: checkoutData.productName,
      selectedColor: checkoutData.color,
      selectedSize: checkoutData.size,
      quantity: checkoutData.quantity,
      price: checkoutData.totalPrice,
      customerName: customerDetails.firstName,
      customerPhone: customerDetails.phoneNumber,
      customerEmail: customerDetails.email,
      companyName: customerDetails.companyName,
      streetAddress: customerDetails.streetAddress,
      apartment: customerDetails.apartment,
      city: customerDetails.city
    };

    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('service_9rk90oo', 'template_kesl1ws', emailParams, 'DjGn5KUxfogq-ehOl')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert("تم تقديم الطلب بنجاح!");
      })
      .catch(err => {
        console.log('FAILED...', err);
        alert("فشل في تقديم الطلب، يرجى المحاولة مرة أخرى.");
      });
  };

  return (
    <div className={styles.page}>
      <span>
        Home / Cart / <span> CheckOut</span>
      </span>
      <h1>تفاصيل الفاتورة</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); sendOrder(); }}>
          <span>الاسم الأول*</span>
          <input type="text" name="firstName" value={customerDetails.firstName} onChange={handleInputChange} required />
          <span>اسم الشركة (اختياري)</span>
          <input type="text" name="companyName" value={customerDetails.companyName} onChange={handleInputChange} />
          <span>عنوان الشارع*</span>
          <input type="text" name="streetAddress" value={customerDetails.streetAddress} onChange={handleInputChange} required />
          <span> رقم العمارة , الدور , رقم شقة  *</span>
          <input type="text" name="apartment" value={customerDetails.apartment} onChange={handleInputChange} required />
          <span>المدينة*</span>
          <input type="text" name="city" value={customerDetails.city} onChange={handleInputChange} required />
          <span>رقم الهاتف*</span>
          <input type="text" name="phoneNumber" value={customerDetails.phoneNumber} onChange={handleInputChange} required />
          <span>البريد الإلكتروني*</span>
          <input type="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />

          <button className={styles.apply} type="submit">تقديم الطلب</button>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
