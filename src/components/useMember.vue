<script>
import { ref, computed } from "vue";
import membersData from "@/assets/members-data.json";
const members = ref(membersData.members);

export function useMembers() {
  const getAllMembers = () => {
    return members.value;
  };

  const getMemberById = (id) => {
    return members.value.find((member) => member.id === parseInt(id));
  };

  const getMemberByName = (name) => {
    return members.value.find(
      (member) =>
        member.name.toLowerCase().replace(" ", "-") === name.toLowerCase()
    );
  };

  // If you prefer to use name-based URLs instead of IDs
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return {
    members: computed(() => members.value),
    getAllMembers,
    getMemberById,
    getMemberByName,
    generateSlug,
  };
}
</script>
