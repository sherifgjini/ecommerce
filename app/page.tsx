import { getProcuts } from "@/services/GetProducts.service";
import Banner from "../components/banner";
import Products from "@/components/Products";

export default async function Home() {
  const { data } = await getProcuts();
  return (
    <main className="mt-5 mb-24">
      <Banner />
      <Products initialData={data} />
    </main>
  );
}
