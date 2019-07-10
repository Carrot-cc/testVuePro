<template>
  <div>
    <h3>MemberContainer</h3>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  created() {
    Toast({
      message: "呀呀呀",
      duration: "2000"
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
