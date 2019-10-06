const courses = [
  {
    id: 1,
    title: "FakeAPI"
  },
  {
    id: 2,
    title: "FakeAPI"
  }
];

const authors = [
  { id: 1, name: "Omkar" }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  courses,
  authors
};
