from pymongo import MongoClient
from bson.objectid import ObjectId

class AnimalShelter(object):
   """ CRUD operations for Animal collection in MongoDB """

   def __init__(self, username, password):
       # Initializing the MongoClient. This helps to 
       # access the MongoDB databases and collections.      
       self.client = MongoClient('mongodb://%s:%s@localhost:37260/?authMechanism=DEFAULT&authSource=AAC' % (username, password))
       self.database = self.client['AAC']

# Complete this create method to implement the C in CRUD.
   def create(self, data):
       if data is not None:
           self.database.animals.insert(data)  # data should be dictionary
           return True
       else:
           raise Exception('Nothing to save, because data parameter is empty')
           
# Create method to implement the R in CRUD.  
   def readAll(self, data):
       result = self.database.animals.find(data, {'_id':False})
       return result
   
   def read(self, data):
        return self.database.animals.find_one(data)
   
# Create the method to implement the U in CRUD
   def update(self, data, new_data):
       if data is not None:
           result = self.database.animals.update_one(data, new_data)
           return result.matched_count
       else:
            raise Exception('No records found.')
             
# Create the method to implement the D in CRUD
   def delete(self, data):
       if data is not None:
           result = self.database.animals.delete_one(data)
           return result.deleted_count  
       else:
           raise Exception('No records to delete')
   