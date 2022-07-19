import './util/module-alias';
import { Server } from '@overnightjs/core';
import * as http from 'http';
import express from 'express';
import ProductController from '@src/api/controllers/productController';

export class SetupServer extends Server {
    private server?: http.Server;

    constructor(private port = 3000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private setupControllers(): void {
        const productController = new ProductController();

        this.addControllers(productController);
    }

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log('Server running at: http://localhost:3000/');
        });
    }
}