import { Request, Response } from 'express';
import pool from "../database";

class UsuarioController {
    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM Usuario');
        res.json({ usuarios });
      }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await pool.query('INSERT INTO Usuario set ?', [req.body]);
            res.json({ message: 'User Saved' });
        } catch (err) {
            res.status(500).json({ error: 'Error al crear usuario' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { idUser } = req.params;
        await pool.query('DELETE FROM Usuario WHERE IdUsuario = ?', [idUser]);
        res.json({ message: 'The user was deleted' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { idUser } = req.params;
        await pool.query('UPDATE Usuario set ? WHERE IdUsuario = ?', [req.body, idUser]);
        res.json({ message: 'The user was updated' });
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        const { idUser } = req.params;
        const usuario = await pool.query('SELECT * FROM Usuario WHERE IdUsuario = ?', [idUser]);
        if (usuario.length > 0) {
            res.json(usuario[0]);
        } else {
            res.status(404).json({ text: 'The user doesn\'t exist' });
        }
    }
}

export const usuarioController = new UsuarioController();
export default usuarioController;
