const args = ["run build"];
const opts = { stdio: "inherit", cwd: "inkling_react", shell: true };
require("child_process").spawn("npm", args, opts);
