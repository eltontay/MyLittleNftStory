import express from 'express';

const router = express.Router();

router.get("/test", async (req, res, next) => {
    return res.status(200).send("Hello Za Worudo");
})

export default router;