const {Logger} = require('../config');

class CrudRepository
{
      constructor(model)
      {
           this.model = model;
      }


      async create(data)
      {
          try {
              const response = await this.model(data);
              return response;
          }

          catch(error)
          {
              Logger.error("Something went wrong");
              throw error;
          }
      }

      async destroy(data)
      {
          try{
              const response = await this.model.destory({
                   where: {
                     id: data
                   }
              });
              return response;
          }

          catch(error)
          {
              Logger.error("Something went wrong");
              throw error;
          }
      }

      async get(data)
      {
          try{
              const response = await this.model.findByPk(data);
              return response;
          }

          catch(error)
          {
              Logger.error("Something went wrong");
              throw error;
          }
      }

      async getAll()
      {
          try{
              const response = await this.model.findAll();
              return response;
          }

          catch(error)
          {
              Logger.error("Something went wrong");
              throw error;
          }
      }

      async update(data)
      {
          try{
              const response = await this.model.update(data, {
                  where: {
                    id: id
                  }
              });
              return response;
          }

          catch(error)
          {
              Logger.error("Something went wrong");
              throw error;
          }
      }
}

module.exports = CrudRepository;