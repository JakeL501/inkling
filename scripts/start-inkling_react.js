const args = ["start"];
const opts = { stdio: "inherit", cwd: "inking_react", shell: true };
require("child_process").spawn("npm", args, opts);
