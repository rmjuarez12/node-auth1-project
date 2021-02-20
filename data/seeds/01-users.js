exports.seed = function (knex) {
  return knex("users").insert([
    { username: "rmjuarez12", password: "XxTheBest" },
  ]);
};
