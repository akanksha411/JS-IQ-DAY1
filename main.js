// function test(arg1,arg2){
//     console.log(this.name,arg1,arg2);
// }
// const testName={
//     name:'prepbytes'
// }
// test.call(testName,100,200)

// function test(...arguments){
//     console.log(this.name,arguments);
// }
// const testName={
//     name:'prepbytes'
// }
// test.apply(testName,[100,200])

// function test(arg){
//     console.log(this.name,arg);
// }
// const testName=test.bind({name:'prepbytes'},'EA17')
// testName()