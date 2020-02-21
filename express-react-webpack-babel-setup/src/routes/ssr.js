import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", async (req, res) => {
    const reactComp = renderToString(<Index />);
    res.send(reactComp);
});
export default router;
