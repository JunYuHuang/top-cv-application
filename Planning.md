# Planning

## MVP Requirements

- toggle app between edit and read-only / submit view
- read, update general (contact) info
  - name
  - email
  - phone number
- create, read, update, delete education
  - an education record has the following:
    - school name
    - title of study
    - start date
    - end date
- create, read, update, delete experience
  - an experience record has the following:
    - company name
    - position title
    - start date
    - end date
    - summary of responsibilities

## App State / Data Model

- `isEditMode`: boolean set to true
- `fullName`: string
- `email`: string
- `phoneNumber`: string
- `education`: array of objects
  - object: {
    `id`: unique id string,
    `schoolName`: string,
    `studyTitle`: string,
    `startDate`: string,
    `endDate`: string,
  }
- `experience`: array of objects
  - object: {
    `id`: unique id string,
    `companyName`: string,
    `positionTitle`: string,
    `startDate`: string,
    `endDate`: string,
    `responsibilities`: string?
  }
