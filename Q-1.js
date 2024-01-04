const value = 2;

db.collection.find({ "field": { $gt: value } });