const generic = async (req, res) => {

    return res.status(400).json({
        name: "kennet",
        lastname:"lopes",
        age: 24,
        skills:['js','angular','react'],
        moto:{
            marca:'honda'
        }
        
    })
};

module.exports = {
    generic
};