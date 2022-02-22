import express from "express";
export declare class expressApi {
    app: express.Express;
    private router;
    constructor();
    private configure;
    private configureMiddleware;
    private configureBaseRoute;
    private configureRoutes;
    private errorHandler;
    run(): Promise<void>;
    private onError;
}
//# sourceMappingURL=express.api.d.ts.map