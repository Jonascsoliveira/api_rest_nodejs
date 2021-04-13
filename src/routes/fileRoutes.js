import { Router } from 'express';
import multer from 'multer';
import fileController from '../controllers/FileController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('file'), fileController.store);

export default router;
