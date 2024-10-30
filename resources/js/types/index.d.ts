import { Config } from "ziggy-js";
import { type User } from "./user";

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: User;
  ziggy: Config & { location: string };
};
