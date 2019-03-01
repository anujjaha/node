const Product = require('./../models/Product')
const Test = require('./../models/test')
console.log("------------------Start------------------");

exports.getAll = function(req, res) {
    Test.findAll(Test.fillable()).then((response) => {       
        Test.transformCollection(response).then(data => {
            res.json(res.h.setSuccessResponse(true, 'Get Products !', data));       
        });
    }).catch((err) => {
        res.json({
            status: false,
            message: 'Something went wrong !',
            err: err
        });
    });
};
console.log("------------------END------------------");


exports.getById = function(req, res) {

    Product.findById(req.params.id).then((response) => {
        if(response)
        {
            res.json({
                status: true,
                message: 'Get Products !',
                item: response
            });
        }
        else
        {
            (true, message, response)
            res.json({
                status: false,
                message: 'Something went wrong !'
            });
        }
    }).catch((err) => {
        res.json({
            status: false,
            message: 'Something went wrong !',
            err: err
        });
    });
};

exports.createProduct = function(req, res)
{
    let request = req.body,
        name    = request.name || false,
        qty     = request.qty || false,
        price   = request.price || false;

    if(name && qty && price)
    {
        Product.create({
            name: name,
            qty: qty,
            price: price
        }).then((response) => {
            res.json({
                status: true,
                message: 'Product Created !',
                item: response
            });
        }).catch((err) => {
            res.json({
                status: false,
                message: 'Something went Wrong !',
                error: err
            });
        });
    }
    else
    {
        res.json({
            status: false,
            message: 'Invalid Inputs !',
        });
    }
}

exports.deleteProduct = function(req, res) {

    let productId = req.params.id;

    if(productId)
    {
        Product.destroy({
            where: {
                id: productId
            }
        }).then((response) => {
            if(response)
            {
                res.json({
                    status: true,
                    message: 'Product Deleted !',
                    item: response
                });
            }
            else
            {
                res.json({
                    status: false,
                    message: 'Invalid Inputs | Product Not Found!',
                });
            }
        }).catch((err) => {
            res.json({
                status: false,
                message: 'Something went Wrong !',
                error: err
            });
        });
    }
    else
    {
        res.json({
            status: false,
            message: 'Invalid Inputs | Product Not Found!',
        });
    }
}

exports.updateProduct = function(req, res) {
    let request     = req.body,
        productId   = request.id || false,
        name        = request.name || false,
        qty         = request.qty || false,
        price       = request.price || false;

    if(productId && name && qty && price)
    {
        Product.update({
                name: name,
                qty: qty,
                price: price
            },
            {
                where: {
                id: productId
            },
        }).then((response) => {
            res.json({
                status: true,
                message: 'Updated Success',
                item: {
                    name: name,
                    qty: qty,
                    price: price
                }
            });
        }).catch((err) => {
            res.json({
                status: false,
                message: 'Fail to Update'
            });
        });
    }
    else
    {
        res.json({
            status: false,
            message: 'Invalid Inputs | Product Not Found!',
        });
    }
}