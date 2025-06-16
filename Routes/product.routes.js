
import express from 'express';
import Product from '../models/product.model.js';



const router = express.Router();
// get all products

router.get('/', (req, res) => {
  Product.find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error', error: err });
    });
});

router.post('/', async (req, res) => {
  const product = req.body;
  
  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: 'All fields are required' }); 
    
  }

const newProduct = new Product(product)
  try{
 await newProduct.save();

 res.status(201).json({message: 'Product created successfully', product: newProduct})

  }catch(error){
      return res.status(500).json({ message: 'Server error' });
  }

});

router.put("/:id", async (req, res)=>{

  const {id } = req.params;
  const product = req.body;

  console.log(product);
  console.log(id)

  try{
   const updatedProduct  = await Product.findByIdAndUpdate(id, product, {new: true});

   res.status(200).json({Updatedproduct: updatedProduct})
  }catch(err){
  res.status(err.status).json(err);
  }
 })

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
try{
  
  await Product.findByIdAndDelete(id);
  res.status(200).json({deleted: id});

}catch(err){
  res.status(500).json("someThing went wrong")
}
})

export default router;