import Product from "../models/product.js";



export function saveProduct(req,res){

  if(req.user == null){
    res.status(403).json({
      message : "Unauthorized"
    })
    return
  }

  if(req.user.role != "admin"){
    res.status(403).json({
      message : "Unauthorized You need to be an admin"
    })
    return
  }
  //console.log(req.body);

  const product = new Product({
    name : req.body.name,
    price : req.body.price,
    description : req.body.description
  })
  product
  .save()
  .then(()=>{
    res.status(200).json({
      status : "Success",
      message : "Product save successfully",
    });
  })
  .catch(()=>{
    message : "Failed add the product"
  })
}

export function getProduct(req,res){
  Product.find()
  .then((data)=>{
    res.json(data)
  })
  .catch(()=>{
    res.json({
      message : "Failed to fetch the data"
    })
  })
}