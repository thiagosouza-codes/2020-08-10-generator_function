function* doSomething() {
  const msg = yield "Awesome!";
  console.log(msg);
}

function main() {
  const generator = doSomething();
  const result = generator.next();

  generator.next(`Really ${result.value}`);
}

main();
