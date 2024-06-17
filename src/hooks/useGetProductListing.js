import useSWR from "swr";
import Api from "../api/Api";

const getKey = () => {
  return `/products`;
};

function useGetProductListing() {
  const { data, error } = useSWR(() => getKey(), getAllProducts);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}

async function getAllProducts() {
  const response = await Api.get(getKey());
  return response["data"];
}

export default useGetProductListing;
