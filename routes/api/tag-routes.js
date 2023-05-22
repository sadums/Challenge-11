const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({include: [{
      model: Product,
      through: ProductTag
    }]});
    res.status(200).json(tagData);
  }catch(e){
    res.status(500).json(e);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {include: [{
      model: Product,
      through: ProductTag
    }]});
    
    if(!tagData){
      res.status(404).json({message: 'No tag found!'});
      return;
    }

    res.status(200).json(tagData);
  }catch(e){
    res.status(500).json(e);
  }
});

// create a new tag
router.post('/', async(req, res) => {
  try{
    const createdTag = await Tag.create(req.body);
    res.status(200).json(createdTag);
  }catch(e){
    res.status(500).json(e);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tag = await Tag.findByPk(req.params.id);

    if(!tag){
      res.status(404).json({message: "No tag found with that ID!"});
      return;
    }
    tag.set(req.body);
    tag.save();
    
    res.status(200).json(tag);
  }catch(e){
    res.status(500).json(e);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const deleted = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })

    if(!deleted){
      res.status(404).json({message: "No tag found with that ID!"});
      return;
    }
    res.status(200).json({message: "Tag deleted."});
  }catch(e){
    res.status(400).json(e);
  }
});

module.exports = router;
