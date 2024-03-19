export const mock_carCreate = {
   id: 'b42f6e4d-20e7-4867-91e0-08388193d85c',
   name: 'Car name',
   description: 'Car description',
   brand: 'Card brand',
   year: 2023,
   km: 10000
};

export const mock_carCreateBody = {
   name: mock_carCreate.name,
   description: mock_carCreate.description,
   brand: mock_carCreate.brand,
   year: mock_carCreate.year,
   km: mock_carCreate.km
};

export const mock_carCreateReturn = mock_carCreate;

export const mock_carInvalidData = {
   name: mock_carCreate.name,
   description: mock_carCreate.description,
   brand: mock_carCreate.brand,
   year: mock_carCreate.year,
   km: '123'
};

export const mock_carGetMany = [
   {
      name: mock_carCreate.name,
      description: mock_carCreate.description,
      brand: mock_carCreate.brand,
      year: mock_carCreate.year,
      km: '123'
   }
];

export const mock_carDelete = 'invalidId';

export const mock_carUpdateBody = {
   name: 'new Name',
   description: 'new',
   brand: 'new',
   year: 2012,
   km: 5000
};

export const mock_carUpdated = { ...mock_carUpdateBody, id: mock_carCreate.id };
