const express = require('express');
const router = express.Router();
const Post = require('../model/post')

//**GET METHOD */
// router.get('/', (req, res) => {
//     res.send('post route is working')
// });

//**Using async await GET Method**
// GET all POST
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
});

//GET Specific POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete the POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost)
    }
    catch (err) {
        res.json({ message: err });
    }
})

//update the post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { title: req.body.title } }
            );
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err })
    }
})

//**POST Method */
// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         discription: req.body.discription
//     });
//     post.save()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err })
//         });
// });

//Using async await method

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        discription: req.body.discription
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;