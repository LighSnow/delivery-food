import { onMounted, ref } from "vue";
import { fetchDataByName } from "@/apis/models";
import { changeImagePath } from "@/utils/changeImagePath";

const usePartner = (restaurantName) => {
  const initialProducts = ref([]);

  const partner = ref({});

  const setPartnerByName = async () => {
    const partnerData = await fetchDataByName(`partner/${restaurantName}`);
    const productsData = partnerData.products.map((item) => {
      return {
        ...item,
        image: changeImagePath(item.image),
      };
    });

    partner.value = {
      ...partnerData,
      products: productsData,
    };

    initialProducts.value = productsData;
  };

  onMounted(async () => {
    await setPartnerByName();
  });

  return {
    partner,
  };
};
export default usePartner;
