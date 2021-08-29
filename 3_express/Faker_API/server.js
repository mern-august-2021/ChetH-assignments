const express = require("express");
const faker = require("faker");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
  const newUser = {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newCompany;
}

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.send([createUser(), createCompany()]);
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
