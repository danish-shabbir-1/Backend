import express  from "express";

const router = express.Router()

const data = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg", "images": ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg", "https://cdn.dummyjson.com/product-images/1/3.jpg", "https://cdn.dummyjson.com/product-images/1/4.jpg", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"] }]

// get all product in api

router.get('/' , (req , res) => {
    res.send({ massasge : 'All Product fetched successfully', data })
})

// get single product in api

router.get('/single' , (req , res) => {
    res.send({massasge : 'Single Product fetched successfully' , data})
})

// product/:id

router.get('/:id' , (req , res) => {
    console.log('request' , req.params.id);
    res.send({massage : 'Single Product fetched successfully with id' , data : data[0]})
})

// product/add

router.post('/add', (req, res) => {
    console.log('req', req.body);
    res.send({ message: 'product added successfully'});
});


export default router