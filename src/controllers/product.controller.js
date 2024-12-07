import Product from '../models/product.model.js'

//traer la lista de clientes
export const getProduct = async (req, res) => {
    const products = await Product.find({
      user: req.user.id,
    }).populate('user');
    res.json(products);
  };
//para solo ver un solo cliente
export const getProductOne = async (req, res) =>{
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({message:"producto no encontrado"})

    res.json(product)
}
//crear para el cliente
export const createProduct = async (req, res) => {
    const { nombre, descripcion, marca, codigo, stock, segmento, precio } =
      req.body;
  
    const newProduct = new Product({
      nombre,
      descripcion,
      marca,
      codigo,
      stock,
      segmento,
      precio,
      user: req.user.id,
    });
    const savedProduct = await newProduct.save()
    res.json(savedProduct)
  };
//poder eliminar el cliente
export const deleteProduct = async(req, res) =>{
    const product = await Client.findByIdAndDelete(req.params.id)
    if(!product) return res.status(404).json({message: "producto no encontrado"})

    return res.sendStatus(204);
}
//poder actualizar el cliente
export const updateProduct = async(req, res)=>{
    const product = await Client.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!product) return res.status(404).json({message:"producto no encontrado"})

    res.json(product)
}