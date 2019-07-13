<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
      <a href="javascript:;" class>
        <img
          class="mui-media-object mui-pull-left"
          :src="item.img_url"
        />
        <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <p class="mui-ellipsis">
            <span>发表时间: {{item.add_time}}</span>
            <span>点击: {{item.click}}次</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>


<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: [] // 新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // 获取新闻列表
      this.$http.get("/api/getnewslist").then(result => {
        if (result.status === 0) {
          this.newslist = result.message;
        } else {
          Toast("获取新闻列表失败...");
        }
      });
    }
  }
};
</script>