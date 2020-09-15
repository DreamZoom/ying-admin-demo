import YingAdmin from "ying-admin"
export default {
    title:"后台管理Demo",
    routes: [{
        path: "/",
        component: YingAdmin.YingLayout,
        redirect:"home",
        children: [{
            name: "首页",
            path: "home",
            icon: "home",
            meta: { authority: ['admin'] },
            component: () => import("./views/home/index")
        }, {
            name: "文章管理",
            path: "posts",
            icon: "home",
            component: () => import("./views/post/index")
        }]
    }, {
        path: "/login",
        component: YingAdmin.YingLogin
    }]
}