const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({include: Product});

    if(!categoryData){
      res.status(404).json({message: 'No categories found!'});
      return;
    }
    res.status(200).json(categoryData);
  }catch(e){
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {include: Product});
    
    if(!categoryData){
      res.status(404).json({message: 'No category found!'});
      return;
    }

    res.status(200).json(categoryData);
  }catch(e){
    res.status(500).json(e);
  }
});

// create a new category
router.post('/', (req, res) => {
  /* req.body should look like this...
  {
    category_name: "Lightsabers"
  }
  */

  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    })
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try{
    const category = await Category.findByPk(req.params.id);
    if(!category){
      res.status(404).json({message : 'No category with that ID'});
      return;
    }
    category.set(req.body);
    await category.save();


    res.status(200).json(category);
  }catch(e){
    res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleted = await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    if(!deleted){
      res.status(404).json({message: "No product found with that ID!"});
      return;
    }
    res.status(200).json({message: "Product deleted."});
  }catch(e){
    res.status(400).json(e);
  }
});

module.exports = router;
