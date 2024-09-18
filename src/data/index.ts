import UserDataSeeder from "./user"
export const data = async () => {
  await UserDataSeeder.run()
};