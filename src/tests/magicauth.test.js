token = 184765547850656;

var string = `https://remotify.netlify/?token=${token}`;
var j = string.match(/\d+/g);

m = j.join();
n = parseInt(m);

describe("it check  if extracted val is int", () => {
  it("asserts val", () => {
    expect(n).toBe(token);
  });
});
