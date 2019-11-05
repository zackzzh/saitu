document.write("<script src='" + dotsSum + "router/routers.js'></script>");

// 路由表找
var gotoRouter;
function findRouter(val, routerArr) {
	routerArr.forEach(function (item) {
		if (item.path === val.path) {
			// console.log("在根找到了", item);
			gotoRouter = item
		} else if (item.children) {
			// console.log("去子找", item);
			findRouter(val, item.children);
		}
	});
}

function $go(val) {
	// let root = "/jypc/pages/";
	// 在路由表找对应的路径
	console.log('val', val);
	findRouter(val, routers)
	// 判断是否存在路由表中，存在则跳转
	if (gotoRouter) {

		// 存储所传参数
		if (val.query) {
			// setSession("query", val.query)
			window.location.href = gotoRouter.component + "?id=" + val.query.id
		} else {
			// delSession("query")
			window.location.href = gotoRouter.component
		}

		console.log('gotoRouter.component', gotoRouter.component)
		// return;
	}
}

function setRouter(val) {
	// console.log("设置路由", val);
	router = val
}



