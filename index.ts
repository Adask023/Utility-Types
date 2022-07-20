import { partialExample } from "./examples/1.partial";
import { parametersExample } from "./examples/10.parameters";
import { constructorParametersExample } from "./examples/11.constructorparameters";
import { returnTypeExample } from "./examples/12.returntype";
import { instanceTypeExample } from "./examples/13.Instancetype";
import { thisParameterExample } from "./examples/14.ThisParameterType";
import { omitThisParameterExample } from "./examples/15.omitThisParameter";
import { requiredExample } from "./examples/2.required";
import { readOnlyExample } from "./examples/3.readonly";
import { recordExample } from "./examples/4.record";
import { pickExample } from "./examples/5.pick";
import { omitExample } from "./examples/6.omit";
import { excludeExample } from "./examples/7.exclude";
import { extractExample } from "./examples/8.extract";
import { nonNullableExample } from "./examples/9.nonnullable";

function run() {
  partialExample();
  requiredExample();
  readOnlyExample();
  recordExample();
  pickExample();
  omitExample();
  excludeExample();
  extractExample();
  nonNullableExample();
  parametersExample();
  constructorParametersExample();
  returnTypeExample();
  instanceTypeExample();
  thisParameterExample();
  omitThisParameterExample();
}
// run();

// function check(x: any) {
//   if (typeof x === "number") {
//     console.log("number");
//   }
//   if (typeof x === "string") {
//     console.log("string");
//   }
// }

// check(12);
