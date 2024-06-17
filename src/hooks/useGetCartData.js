import useSWR from "swr";
import api from "../api/Api";

const getKey = () => {
  return `/carts`;
};

async function getCartData() {
  const response = await api.get(getKey());

  return response["data"];
}

function useCartData() {
  const { data, error } = useSWR(getKey, getCartData);

  return {
    carts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCartData;
