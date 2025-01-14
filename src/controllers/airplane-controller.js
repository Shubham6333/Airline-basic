const {StatusCodes} = require('http-status-codes');
const {AirplaneService} = require("../services");

async function createAirplane(req, res)
{
     try {
         const airplane = await AirplaneService.createAirplane({
             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity
         });

         return res
                   .status(StatusCodes.CREATED)
                   .json({
                      success: true,
                      mesage: "Successfully create an airplane",
                      data: airplane,
                      error: {}
                   });
     }

     catch(error)
     {

     }
}

module.exports = {
    createAirplane
}