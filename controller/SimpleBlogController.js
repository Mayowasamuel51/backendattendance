const SimpleBlog = require('../model/SimpleBlog')

// create a post 
exports.createApi = async (req,res) => {
    try {
        const { title, phone, blognote, bloggerurl, price, usesubheaders } = req.body;
        const data = await SimpleBlog.create({
            titletitle: title,
            phone: phone, 
            bloggerurl: bloggerurl,
            price: price,
            usesubheaders: usesubheaders,
            blognote:blognote
        })
        res.status(200).json({
            status: 200,
            dataMessage: 'data created  please move on  please try',
            createdData:data
        })  
    } catch (err) {
        res.status(404).json({
            status:404, 
            dataMessage: 'Please check your network or server proxy',
            error:err.message
        })
    }
}
exports.getNames = () => {
    
}













// const CreateApi = async () => {
    
// }
// const getData = async () => {
    
// }


// module.exports = {
//     CreateApi,
//     getData
// }