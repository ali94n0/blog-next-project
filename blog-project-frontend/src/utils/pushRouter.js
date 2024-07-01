const pushRouter = (router) => {
	router.push(router, undefined, { scroll: false });
};

export default pushRouter;
