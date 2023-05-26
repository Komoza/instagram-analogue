import { Posts } from "./posts/posts-page";
import { Authorization } from "./authorization/auth";

export const Main = () => (
  <>
    <Authorization />
    <Posts />
  </>
);
