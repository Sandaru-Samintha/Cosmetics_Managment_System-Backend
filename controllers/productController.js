import Product from "../models/product.js";



export function saveProduct(req,res){

  if(!isAdmin(req)){
    res.status(403).json({
      message : "You are not authorized to add a product"
    })
    return
  }

  const product = new Product(
    req.body
  );

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

export async function getProduct(req,res){
  try{
    if(isAdmin(req)){
      const products = await Product.find()
      res.json(products)
    }else{
      const products = await Product.find({isAvailable : true})
      res.json(products)
    }
  }catch(err){
    res.json({
      message: "Failed to get products",
      error:err
    })
  }
}

export async function deleteProduct(req,res){
  if(!isAdmin(req)){
    res.status({
      message:"You are not authorized to delete a product"
    })
  }
  try {
    await Product.deleteOne({productId : req.params.productId})
    res.json({
      message : "Product deleted successfully"
    })
  } catch (err) {
    res.status(500).json({
      message : "failed to delete products",
      error : err
    })
  }
  
}

//create the function of check is admin
export function isAdmin(req){
  if(req.user==null){
    return false
  }
  if(req.user.role != "admin"){
    return false
  }
  return true
}