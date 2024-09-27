import UserDataSeeder from "./user"
import CountryDataSeeder from "./country"
export const data = async () => {
  await CountryDataSeeder.run()
  await UserDataSeeder.run()
};