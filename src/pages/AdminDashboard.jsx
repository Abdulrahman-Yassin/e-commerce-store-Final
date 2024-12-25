
import { useContext, useState } from 'react';
import { ProductContext } from '../ProductContext';
import styles from './AdminDashboard.module.css'

const AdminDashboard = () => {
  const { products, updateProduct, addProduct, deleteProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ 
    name: '', 
    price: '', 
    colors: [], 
    sizes: [], 
    quantity: '',
    image1: '', 
    image2: '', 
    image3: '', 
    image4: '', 
    image5: '' 
  });

  // دالة لمعالجة التعديل على المنتجات
  const handleProductChange = (productId, field, value) => {
    const updatedProduct = products.find(p => p.id === productId);
    updatedProduct[field] = value;
    updateProduct(updatedProduct);
  };


  const handleColorsChange = (productId, value) => {
    const updatedProduct = products.find(p => p.id === productId);
    updatedProduct.color = value.split(',').map(item => item.trim()); // تعديل مصفوفة الألوان
    updateProduct(updatedProduct); // استخدام updateProduct لتحديث المنتج
  };
  

  const handleSizesChange = (productId, value) => {
    const updatedProduct = products.find(p => p.id === productId);
    updatedProduct.sizes = value.split(',').map(item => item.trim()); // تعديل مصفوفة المقاسات
    updateProduct(updatedProduct); // استخدام updateProduct لتحديث المنتج
  };
  

  // دالة لمعالجة إضافة منتج جديد
  const handleAddProduct = () => {
    const productId = products.length + 1; // أو استخدم نظام لتوليد المعرفات
    addProduct({ ...newProduct, id: productId });
    setNewProduct({ 
      name: '', 
      price: '', 
      colors: [], 
      sizes: [], 
      quantity: '',
      image1: '', 
      image2: '', 
      image3: '', 
      image4: ''
    });
  };

  return (
    <div>
      <h2>Store management</h2>
      <hr />
      <div className={styles.newProduct}>
        <h1>New product</h1>
        <button onClick={handleAddProduct}>Add</button>
        <div>
          <div>
            <input 
              type="text" 
              placeholder='name' 
              value={newProduct.name} 
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
              required
            />
            <input 
              type="number" 
              placeholder="price" 
              min={0}
              value={newProduct.price} 
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
              required
            />
            <input 
              type="number" 
              placeholder="quantity" 
              min={0}
              value={newProduct.quantity} 
              onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="colors" 
              value={newProduct.colors.join(',')} 
              onChange={(e) => setNewProduct({ ...newProduct, colors: e.target.value.split(',') })} 
            />
            <input 
              type="text" 
              placeholder="sizes" 
              value={newProduct.sizes.join(',')} 
              onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value.split(',') })} 
            />
          </div>
          <div className={styles.image}>
            <input 
              type="text" 
              placeholder="image1" 
              value={newProduct.image1} 
              onChange={(e) => setNewProduct({ ...newProduct, image1: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="image2" 
              value={newProduct.image2} 
              onChange={(e) => setNewProduct({ ...newProduct, image2: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="image2" 
              value={newProduct.image3} 
              onChange={(e) => setNewProduct({ ...newProduct, image3: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="image4" 
              value={newProduct.image4} 
              onChange={(e) => setNewProduct({ ...newProduct, image4: e.target.value })} 
            />
          </div>
        </div>
      </div>

      <hr />

      <div>
      <h1>Products</h1>
        {/* عرض قائمة المنتجات */}
        {products.map(product => (
          <div key={product.id} className={styles.detail}>
            <img src={product.image1} alt="" width='200pd' height='225px'/>
            <div className={styles.edit}>
              <div>
              <input 
              type="text" 
              placeholder='name'
              value={product.name} 
              onChange={(e) => handleProductChange(product.id, 'name', e.target.value)} 
            />
            <input 
              type="number" 
              placeholder='price'
              min={0}
              value={product.price} 
              onChange={(e) => handleProductChange(product.id, 'price', e.target.value)} 
            />
            <input 
              type="number" 
              placeholder='quantity'
              min={0}
              value={product.quantity} 
              onChange={(e) => handleProductChange(product.id, 'quantity', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="colors" 
              value={Array.isArray(product.color) ? product.color.join(',') : ''} 
              // onChange={(e) => handleArrayChange(product.id, 'colors', e.target.value)} 
              onChange={(e) => handleColorsChange(product.id, e.target.value)}
            />
            <input 
              type="text" 
              placeholder="sizes" 
              value={Array.isArray(product.sizes) ? product.sizes.join(',') : ''} 
              // onChange={(e) => handleArrayChange(product.id, 'sizes', e.target.value)} 
              onChange={(e) => handleSizesChange(product.id, e.target.value)}
            />
              </div>
            {/* الحقول الخاصة بالصور */}
            <div className={styles.images}>
            <input 
              type="text" 
              placeholder='image1' 
              value={product.image1 || ''} 
              onChange={(e) => handleProductChange(product.id, 'image1', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder='image2' 
              value={product.image2 || ''} 
              onChange={(e) => handleProductChange(product.id, 'image2', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder='image3' 
              value={product.image3 || ''} 
              onChange={(e) => handleProductChange(product.id, 'image3', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder='image4' 
              value={product.image4 || ''} 
              onChange={(e) => handleProductChange(product.id, 'image4', e.target.value)} 
            />
            </div>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;
