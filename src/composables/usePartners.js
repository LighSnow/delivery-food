import { onMounted, ref } from "vue";
import { fetchDataByName } from "@/apis/models";
import { changeImagePath } from "@/utils/changeImagePath";

const usePartners = () => {
  const initialPartners = ref([]);
  const partners = ref([]);

  const setPartnersByName = async () => {
    const getPartners = await fetchDataByName("partners");
    const partnersData = getPartners.map((item) => {
      return {
        ...item,
        image: changeImagePath(item.image),
      };
    });
    partners.value = partnersData;
    initialPartners.value = partnersData;
  };

  onMounted(async () => {
    await setPartnersByName();
  });

  return {
    partners,
  };
};
export default usePartners;
