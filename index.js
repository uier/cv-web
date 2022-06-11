import { LeetCode } from "leetcode-query";

const leetcode = new LeetCode();
const user = await leetcode.get_user("username");
console.log(user)