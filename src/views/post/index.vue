<template>
  <ying-page>
    <ying-table title="文章管理" request="/api/post/page-list" :columns="columns">
      <template slot="batch-action" slot-scope="{rows}">
        <ying-action text="创建" request="/api/post/save" action-type="primary">
          <template slot-scope="{model}">
            <a-form-model-item label="标题" prop="title">
              <a-input v-model="model.title" type="textarea" />
            </a-form-model-item>
          </template>
        </ying-action>
        <ying-action
          text="批量删除"
          request="/api/post/batch-delete"
          action-type="danger"
          :disabled="rows.length==0"
          :data="{ids:rows.map(it=>it.name).join(',')}"
        >
          <div>
            你要删除这些文章么？
            <div v-for="(item,i) in rows" :key="i">
              <p>{{item.title}}</p>
            </div>
          </div>
        </ying-action>
      </template>
      <template slot="action" slot-scope="{record}">
        <ying-action text="编辑" :data="{...record}" request="/api/post/save" action-type="primary">
          <template slot-scope="{model}">
            <a-form-model-item label="标题" prop="title">
              <a-input v-model="model.title" type="textarea" />
            </a-form-model-item>
          </template>
        </ying-action>

        <ying-action text="删除" :data="{...record}" request="/api/post/delete" action-type="danger">
          <span>确定要删除么？</span>
        </ying-action>
      </template>
    </ying-table>
  </ying-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          dataIndex: "title",
          title: "标题",
        },
        {
          dataIndex: "createTime",
          title: "创建时间",
        },
      ],
    };
  },
};
</script>