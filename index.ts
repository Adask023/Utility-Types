import { partialExample } from "./examples/1.partial";
import { requiredExample } from "./examples/2.required";
import { readOnlyExample } from "./examples/3.readonly";
import { recordExample } from "./examples/4.record";
import { pickExample } from "./examples/5.pick";
import { omitExample } from "./examples/6.omit";
import { excludeExample } from "./examples/7.exclude";

function run() {
  partialExample();
  requiredExample();
  readOnlyExample();
  recordExample();
  pickExample();
  omitExample();
  excludeExample();
}
run();
