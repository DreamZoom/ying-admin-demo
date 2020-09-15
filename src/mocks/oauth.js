import Mock from 'mockjs'

Mock.mock("/api/oauth/token", "post", (req, res) => {
    return Mock.mock({
        access_token: "6342e052-f801-4a0f-a921-94065de9d87d",
        token_type: "bearer",
        expires_in: 43199,
        scope: "all",
    });
});
Mock.mock("/api/oauth/user", "post", (req, res) => {
    return Mock.mock({
        password: "$2a$10$6/2ruM.9nwt70KRnlj2VReLND5Ve4EjQVrDpnFIsMH3JgYlsuQRSy",
        createTime: "2020-04-24 22:30:01",
        tell: null,
        roles: "admin",
        nickname: "管理员2",
        alias: null,
        updateTime: "2020-04-24 22:30:01",
        remark: "",
        id: 1,
        email: "1036199213@qq.com",
        username: "admin",
    });
});