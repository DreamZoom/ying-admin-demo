import Mock from 'mockjs'

const model ={
    'id|+1': 1,
    "title": "@title",
    "body": "@paragraph",
    "createTime": "@now"
}

Mock.mock('/api/post/page-list', 'post', () => {
    return Mock.mock({
        "list|10": [model],
        records: 1000,
        page: 1,
        size: 20
    })
});

Mock.mock('/api/post/save', 'post', () => {
    return Mock.mock(model)
});

Mock.mock('/api/post/delete', 'post', () => {
    return Mock.mock(model)
});

Mock.mock('/api/post/batch-delete', 'post', () => {
    return Mock.mock(model)
});